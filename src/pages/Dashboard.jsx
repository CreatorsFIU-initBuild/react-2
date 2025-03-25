import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSellerView, setIsSellerView] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile toggle sidebar button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      </div>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } trnasition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
