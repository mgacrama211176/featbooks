import { app } from "@/app/lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const auth = getAuth(app);

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    const userData = {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      accessToken: user.stsTokenManager.accessToken,
      refreshToken: user.stsTokenManager.refreshToken,
      expiresIn: user.stsTokenManager.expirationTime,
    };

    console.log(userData);

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Incorrect Email or Password! Please try again." },
      { status: 500 },
    );
  }
}
