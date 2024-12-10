"use client";
import React, { Suspense } from "react";
import {
  Users,
  BookOpen,
  Heart,
  Settings,
  PlusCircle,
  Activity,
  BookPlus,
  BarChart3,
} from "lucide-react";
import HeaderNavigation from "./component/HeaderNavigation";
import StatCard from "./component/StatCard";
import useLoggedUser from "../hooks/useLoggedUser";
import Idler from "../utils/Idler";

const Dashboard = () => {
  const user = useLoggedUser();

  return (
    <div className="min-h-screen bg-gray-50">
      {user && (
        <>
          <Idler />
          <HeaderNavigation user={user} />

          {/* Main Content */}
          <div className="container mx-auto px-4 py-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Users"
                value="1,234"
                icon={<Users className="w-6 h-6" />}
                trend="+12% from last month"
              />
              <StatCard
                title="Total Books"
                value="5,678"
                icon={<BookOpen className="w-6 h-6" />}
                trend="+8% from last month"
              />
              <StatCard
                title="Wishlisted Items"
                value="892"
                icon={<Heart className="w-6 h-6" />}
                trend="+15% from last month"
              />
              <StatCard
                title="New Books Added"
                value="123"
                icon={<BookPlus className="w-6 h-6" />}
                trend="+5% from last month"
              />
            </div>

            {/* Recent Activity and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Recent Activity
                  </h2>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          New user registered
                        </p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        User
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <PlusCircle className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    Quick Actions
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition-colors">
                    <BookPlus className="w-6 h-6 mb-2 mx-auto" />
                    <span className="text-sm font-medium block">
                      Add New Book
                    </span>
                  </button>
                  <button className="p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors">
                    <Users className="w-6 h-6 mb-2 mx-auto" />
                    <span className="text-sm font-medium block">
                      Manage Users
                    </span>
                  </button>
                  <button className="p-4 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition-colors">
                    <BarChart3 className="w-6 h-6 mb-2 mx-auto" />
                    <span className="text-sm font-medium block">
                      View Analytics
                    </span>
                  </button>
                  <button className="p-4 bg-gray-50 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    <Settings className="w-6 h-6 mb-2 mx-auto" />
                    <span className="text-sm font-medium block">Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
