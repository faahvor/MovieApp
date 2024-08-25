/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { GiMoonBats } from "react-icons/gi";

import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode, pathname } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav className="absolute w-full top-3 flex justify-between items-center pr-8">
      <ul
        className={`flex justify-around w-full text-2xl ${
          darkMode ? " text-white" : " text-black"
        }`}
      >
        {pathname.includes(["register","login"]) ? (null):( <>
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
          <div className="flex gap-4 *:bg-gray-200 *:rounded-md *:px-3 *:py-1 text-sm">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </div>
          </>)}
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
