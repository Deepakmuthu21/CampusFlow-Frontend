import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

function Navbar() {
  const { isAuthenticated, userRole, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const navigate = useNavigate();

  let role = "/";

  if (userRole === "student") {
    role = "/student-dashboard";
  } else if (userRole === "mentor") {
    role = "/mentor-dashboard";
  } else if (userRole === "admin") {
    role = "/admin-dashboard";
  }

  const handleLogout = () => {

    if (!window.confirm("log out of your account?"))
      return;
      logout();
    navigate("/");
  };

  return (
    <nav className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 fixed w-full z-20 top-0 left-0 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <Link to="/" className="text-white font-bold text-xl">
         <span className="font-bold bg-gradient-to-r  from-yellow-500 via-white to-green-600 bg-clip-text text-transparent">CampusFlow</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          ☰
        </button>

        <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center`}>
          <ul className="flex flex-col md:flex-row gap-6 text-white mt-4 md:mt-0">

            <li>
              <a href="#about">About Us</a>
            </li>

            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <Link to={"/career"}>Career</Link>
            </li>

            {/* Show Dashboard only if logged in */}
            {isAuthenticated && (
              <li>
                <Link to={role}>Dashboard</Link>
              </li>
            )}

            <li>
              <a href="#contact">Contact</a>
            </li>

            {/* Login / Logout */}
            <li className="relative">
              {isAuthenticated ? (
                <button onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setIsDropdown(!isDropdown)}
                  >
                    Login
                  </button>

                  {isDropdown && (
                    <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-xl w-44">
                      <Link
                        to="/user-login"
                        className="block px-4 py-2 hover:text-blue-400"
                      >
                        User Login
                      </Link>
                      <Link
                        to="/admin-login"
                        className="block px-4 py-2 hover:text-blue-400"
                      >
                        Admin Login
                      </Link>
                    </div>
                  )}
                </>
              )}
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
