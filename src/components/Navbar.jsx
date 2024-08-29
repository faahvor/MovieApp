/* eslint-disable no-unused-vars */
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { GiMoonBats } from "react-icons/gi";

import { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthProvider";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const { darkMode, setDarkMode, pathname } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  if (pathname.includes("register") || pathname.includes("login")) {
    return null;
  }
  return (
    <nav className="absolute w-full top-3 flex justify-between items-center pr-8">
      <ul
        className={`flex justify-around w-full text-2xl ${
          darkMode ? " text-white" : " text-black"
        }`}
      >
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/settings",
                search: "?sort=date",
                state: { fromHome: true },
              }}
            >
              Settings
            </Link>
          </li>
          <div className={`flex items-center text-2xl cursor-pointer`}>
              {user ? (
                <li>
                  <FaRegCircleUser
                    onClick={() => setShowUserDropdown((prev) => !prev)}
                  />

                  {showUserDropdown && (
                    <div className="absolute top-12 right-3 bg-white shadow-md rounded-md p-2 z-10">
                      <ul className="text-gray-700 text-sm w-36 flex flex-col gap-2  *:py-1">
                        {/* <li className={`hover:bg-slate-50 duration-200 px-3 py-0.5 rounded-md transition ease-in-out `}>
                          <NavLink to="/profile">Profile</NavLink>
                        </li> */}
                        <li onClick={()=>setShowUserDropdown(false)} className={`hover:bg-slate-50 duration-200 px-3 py-0.5 rounded-md transition ease-in-out `}>
                          <NavLink to="/settings">Account Settings</NavLink>
                        </li>
                        <li className={`hover:bg-slate-50 duration-200 px-3 py-0.5 rounded-md transition ease-in-out `}>
                          <button
                            onClick={() => {
                              logout();
                              setShowUserDropdown(false);
                            }}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <div
                  className={`flex  gap-4 ${
                    darkMode
                      ? "text-black *:bg-gray-200"
                      : "text-white *:bg-gray-600"
                  } *:rounded-md *:px-3 *:py-1 text-sm`}
                >
                  <li>
                    <NavLink to={"/register"}>Register</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>
                </div>
              )}
            </div>
        </>
      </ul>
      <span
        className={` ${
          pathname == "/settings" ? "text-white" : "text-black"
        } mt-1 text-2xl ${
          pathname == "/blog" ? "text-green-400" : "text-black"
        } mt-1 text-2xl `}
        onClick={handleClick}
      >
        {darkMode ? <GiMoonBats /> : <CiLight />}
      </span>
    </nav>
  );
};

export default Navbar;
