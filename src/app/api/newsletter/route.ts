import { db } from "@/app/lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  console.log(email);

  try {
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const newsletterRef = collection(db, "newsletters");
    const q = query(newsletterRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 400 },
      );
    }

    await addDoc(newsletterRef, {
      email,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter" },
      { status: 500 },
    );
  }
}
