import { app, db } from "@/app/lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";

interface FirebaseUser extends User {
  stsTokenManager: {
    accessToken: string;
    refreshToken: string;
    expirationTime: number;
  };
}

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const auth = getAuth(app);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user as FirebaseUser;

    //get the user from the DB
    const userRef = collection(db, "users");
    const q = query(userRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const userDb = querySnapshot.docs[0].data();

    console.log(user);

    const userData = {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      accessToken: user.stsTokenManager.accessToken,
      refreshToken: user.stsTokenManager.refreshToken,
      expiresIn: user.stsTokenManager.expirationTime,
      role: userDb.role,
    };

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Incorrect Email or Password! Please try again." },
      { status: 401 }
    );
  }
}
