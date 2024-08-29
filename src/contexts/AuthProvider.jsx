/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { loginEndpoint } from "../services/endpoint";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const login = async (credentials) => {
    try {
      setLoading(true);
      await axios
        .post(loginEndpoint, credentials)
        .then((res) => {
          setLoading(false);
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
          console.log("there was a caught");
          setLoading(false)
        });
    } catch (error) {
      console.error("login failed", error);
      setLoading(false);
    }
  };
  const logout = () => {
    setUser(null);
  };
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
