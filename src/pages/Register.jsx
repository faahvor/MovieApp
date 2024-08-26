/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "", // Added for confirm password field
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/v1/user/register", formData);
      alert("Registration successful!");
      navigate("/login"); // Redirect to login or another page
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="mt-20 h-screen font-Aeonik_regular flex flex-row-reverse justify-center">
      <form
        className="flex-1 flex flex-col items-center"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="text-2xl font-aeonik_bold uppercase gap-2">
            Create your account
          </h2>
          <p className="text-gray-500 font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            sunt.
          </p>
        </div>
        <div className="form-body flex flex-col gap-4 w-full max-w-md">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-Aeonik_bold text-sm" htmlFor="firstName">
                First Name
              </label>
              <input
                onChange={handleFormChange}
                className="border-2 border-gray-200 rounded-md h-9 px-4 outline-red-300"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-Aeonik_bold text-sm" htmlFor="lastName">
                Last Name
              </label>
              <input
                onChange={handleFormChange}
                className="border-2 border-gray-200 rounded-md h-9 px-4 outline-red-300"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-Aeonik_bold text-sm" htmlFor="userName">
              UserName
            </label>
            <input
              onChange={handleFormChange}
              className="border-2 border-gray-200 rounded-md h-9 px-4 outline-red-300"
              type="text"
              id="userName"
              name="userName"
              placeholder="johnny"
              value={formData.userName}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-Aeonik_bold text-sm" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleFormChange}
              className="border-2 border-gray-200 rounded-md h-9 px-4 outline-red-300"
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-Aeonik_bold text-sm" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleFormChange}
              className="border-2 border-gray-200 rounded-md h-9 px-4 text-xl outline-red-300"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-Aeonik_bold text-sm"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              onChange={handleFormChange}
              className="border-2 border-gray-200 rounded-md h-9 px-4 text-xl outline-red-300"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              required
            />
          </div>
          <button
            className="bg-[#CF1D1D] mt-5 w-full px-3 py-3 text-white"
            type="submit"
          >
            Register
          </button>
        </div>
        <p className="text-gray-500 font-medium mt-3">
          Already have an account?{" "}
          <Link className="font-semibold ml-1 text-black" to={"/login"}>
            Sign in
          </Link>
        </p>
      </form>
      <div>
        <img
          className="h-screen flex-1"
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1724321201/Fingerprint-pana_di6yyj.png"
          alt="Fingerprint illustration"
        />
      </div>
    </div>
  );
};

export default Register;
