import React from "react";
import { StatCardProps } from "../types";

const StatCard = ({ title, value, icon, trend }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-700">{value}</h3>
          {trend && (
            <span className="text-xs text-green-500 mt-1 block">{trend}</span>
          )}
        </div>
        <div className="text-blue-500">{icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
