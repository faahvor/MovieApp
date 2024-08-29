/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ImSpinner } from "react-icons/im";
import ThemeContext from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthProvider";
import { loginEndpoint } from "../services/endpoint";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { darkMode } = useContext(ThemeContext);
  const { user, login, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState("password");

  // useEffect(() => console.log(user), []);

  const handleChange = (e) => {
    e.preventDefault();
    const { value, id } = e.target;
    console.log(value, id, e.target);
    console.log(loginEndpoint);
    setCredentials({
      ...credentials,
      [id]: value,
    });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    login(credentials)
      .then(() => navigate("/"))
      .catch((error) => {
        console.error("Login failed", error);
      });
    const a = await user;
    console.log(a);
  };

  return (
    <div
      className={` ${
        darkMode ? "bg-gray-800 text-white " : " bg-white "
      } font-aeonik_regular h-screen flex flex-row justify-center`}
    >
      <form
        onSubmit={handleSubmission}
        className="flex-1 flex flex-col items-center mt-32"
      >
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="text-2xl font-aeonik_bold ">Login to your account</h2>
          <p className="text-gray-500 font-medium text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="flex flex-col gap-7  w-[24rem] ">
          <div className="flex flex-col gap-1">
            <label htmlFor="userName" className="font-aeonik_bold ">
              User Name
            </label>
            <input
              className="border-2 h-9 text-black border-gray-300 px-2 rounded-md"
              type={"text"}
              id="userName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1 relative ">
            {showPassword === "password" ? (
              <FaEyeSlash
                className="absolute right-2 top-[2.5rem]"
                onClick={() => setShowPassword("text")}
              />
            ) : (
              <FaEye
                className="absolute right-2 top-[2.5rem]"
                onClick={() => setShowPassword("password")}
              />
            )}
            <label htmlFor="password" className="font-aeonik_bold ">
              Password
            </label>
            <input
              className="border-2 h-9 text-black border-gray-300 px-2 rounded-md"
              type={showPassword}
              id="password"
              required
              onChange={handleChange}
            />
          </div>
          <button className="bg-[#CF1D1D] text-center flex items-center justify-center self-center text-white h-9 rounded-md w-1/2">
            {loading ? <ImSpinner className="animate-spin" /> : "Login"}
          </button>
          <p className="text-gray-500 text-center text-sm">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-medium`}
            >
              Register
            </Link>
          </p>
          <p className="text-gray-500 text-sm text-center">
            Forgot your password?{" "}
            <Link
              to={"/"}
              className={`${
                darkMode ? "text-white" : "text-black"
              } font-medium`}
            >
              Reset
            </Link>
          </p>
        </div>
      </form>
      <div className="flex-1 flex items-center  bg-green-700 justify-center">
        <img
          src="https://images.unsplash.com/photo-1717583191083-cd82ed7f217e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"
          alt="coding"
          className="w-full h-full object-cover "
        />
        <div className="absolute bg-black/75  gap-4 p-5 flex flex-col justify-center items-center w-96 h-96">
          <h2 className=" text-white text-4xl  font-aeonik_bold">
            Welcome Back!
          </h2>
          <p
            className=" text-white mt-7
        text-center text-lg font-aeonik_regular"
          >
            To keep connected with us please login with your personal info
          </p>
          <p className=" text-white text-lg font-aeonik_regular">
            If you have any issues, please contact us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
