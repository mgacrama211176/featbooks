import { app, db } from "@/app/lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

export async function POST(request: Request) {
  const { email, password, fullname, role } = await request.json();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await updateProfile(user, {
      displayName: fullname,
    });

    //Add the all the user information to the DB
    const userRef = collection(db, "users");
    await addDoc(userRef, {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      role: role || "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
