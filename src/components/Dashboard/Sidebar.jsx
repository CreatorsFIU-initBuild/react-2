import { Link, NavLink } from "react-router-dom";
import { FaRegListAlt, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div style={{ padding: "1.5rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Link
          to="/dashboard"
          className="block text-white text-2xl"
          style={{ textDecoration: "none" }}
        >
          CreatorsFIU
        </Link>
      </div>
      <h2
        className="font-medium text-center"
        style={{ marginBottom: "1.5rem", fontSize: "2rem" }}
      >
        Dashboard
      </h2>

      <nav className="flex flex-col">
        <NavLink
          to="/dashboard/seller"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white rounded flex items-center"
              : "text-gray-300 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
          style={{
            padding: "0.75rem 1rem",
            textDecoration: "none",
            color: "white",
            margin: "1rem 0",
          }}
        >
          <FaRegListAlt style={{ marginRight: "0.5rem" }} />
          My Listings
        </NavLink>
        <NavLink
          to="/dashboard/buyer"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white rounded flex items-center"
              : "text-gray-300 hover:bg-gray-700 hover:text-white rounded flex items-center"
          }
          style={{
            padding: "0.75rem 1rem",
            textDecoration: "none",
            color: "white",
          }}
        >
          <FaShoppingCart style={{ marginRight: "0.5rem" }} />
          <span>My Purchases</span>
        </NavLink>
      </nav>
      <div style={{ marginTop: "1.5rem" }}>
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white rounded flex items-center justify-center"
          style={{ padding: "0.5rem 1rem" }}
        >
          <FaSignOutAlt style={{ marginRight: "0.5rem" }} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
