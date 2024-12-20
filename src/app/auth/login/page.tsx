"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setCookie } from "@/app/utils/cookies";
import { useUserStore } from "@/app/state/useUserStore";
import { Loader } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    ("use server");
    e.preventDefault();
    setLoading(true);

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const response = await axios
      .post("/api/auth/login", {
        email,
        password,
      })
      .then((res) => {
        setCookie("Token", res.data.accessToken, res.data.expiresIn);

        const user = {
          id: res.data.id,
          email: res.data.email,
          name: res.data.displayName,
          role: res.data.role,
          photoURL: res.data.photoURL,
          phoneNumber: res.data.phoneNumber,
        };

        const setUser = useUserStore.setState({ user });
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/dashboard");
      })
      .catch((err) => {
        const errorMessage = err.response.data.error;
        setError(errorMessage);
      });
    setLoading(false);
  };

  return (
    <section className="h-[80vh] flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              href="/auth/register"
              className="font-medium text-black hover:text-[#edc34a]"
            >
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-black hover:text-[#edc34a]"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-[#edc34a] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              {loading ? <Loader className="animate-spin" /> : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
