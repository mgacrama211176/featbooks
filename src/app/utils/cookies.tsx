"use server";
import { cookies } from "next/headers";

export const getCookie = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("Token");
  return token;
};

export const setCookie = async (
  key: string,
  value: string,
  expires: number,
) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value, {
    maxAge: expires,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};

export const deleteCookie = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};
