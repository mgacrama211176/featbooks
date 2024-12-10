import React, { Suspense } from "react";
import { LogOut, User, Bell } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { deleteCookie } from "@/app/utils/cookies";
import Link from "next/link";
import { useUserStore } from "@/app/state/useUserStore";

const HeaderNavigation = ({ user }: { user: any }) => {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);
  console.log(user);

  const onLogout = async () => {
    const response = await axios
      .post("/api/auth/logout")
      .then(() => {
        localStorage.clear();
        deleteCookie("Token");
        setUser(null);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo & Title */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/featbooks.png"
                alt="Featbooks Logo"
                width={150}
                height={150}
                className="object-cover"
                priority
              />
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          </div>

          {/* Right side - User Info & Actions */}
          <div className="flex items-center gap-6">
            {/* Notifications */}
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Info & Logout */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                  {user ? (
                    <div className="hidden md:block">
                      <p className="text-sm text-gray-500">Welcome back,</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {user.name}
                      </p>
                    </div>
                  ) : (
                    <div className="hidden md:block">
                      <p className="text-sm text-gray-500">Loading user...</p>
                    </div>
                  )}
                </Suspense>
              </div>

              <div className="h-6 w-px bg-gray-200"></div>

              <button
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                onClick={onLogout}
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-medium hidden md:block">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
