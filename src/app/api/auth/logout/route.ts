import { app } from "@/app/lib/firebase";
import { NextResponse } from "next/server";
import { getAuth, signOut } from "firebase/auth";

export async function POST(request: Request) {
  const auth = getAuth(app);

  try {
    await signOut(auth);
    return NextResponse.json({ message: "User logged out" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to log out" }, { status: 500 });
  }
}
