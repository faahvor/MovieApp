/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/v1/user/login", formData);
      alert("Login successful!");
      navigate("/"); // Redirect to login or another page
    } catch (error) {
      alert("incorrect details");
      console.log(error);
    }
  };
  return (
    <div className="mt-20 h-screen font-Aeonik_regular flex flex-row-reverse  justify-center">
      <form
        className="flex-1 flex flex-col items-center"
        action=""
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="text-2xl font-aeonik_bold uppercase gap-2">
            Log into your account
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sunt.
          </p>
        </div>
        <div className="form-body flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-Aeonik_bold text-sm" htmlFor="userName">
              UserName
            </label>
            <input
              onChange={handleFormChange}
              className="border-2 border-gray-200 rounded-md h-9 px-4 outline-red-300 "
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              placeholder="johnny"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-Aeonik_bold  text-sm" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleFormChange}
              className="border-2 border-gray-200 rounded-md h-9 px-4 text-xl outline-red-300"
              type="password"
              id="password"
              name="password"
              value={formData.password}
            />
          </div>

          <button className="bg-[#CF1D1D] mt-5 w-full px-3 py-3 text-white">
            Login
          </button>
        </div>

        <p className="text-gray-500 font-medium mt-3">
          Don't have an account ?{" "}
          <Link className="font-semibold ml-1 text-black" to={"/register"}>
            Sign up
          </Link>
        </p>
      </form>
      <div>
        <img
          className="h-screen flex-1"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1724321201/Fingerprint-pana_di6yyj.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
