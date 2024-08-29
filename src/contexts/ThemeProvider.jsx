/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";
import { useLocation } from "react-router-dom";

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const location = useLocation();
  const { pathname } = location;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, pathname }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
