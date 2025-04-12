import React, { useState } from "react";
const API = import.meta.env.VITE_API_BASE_URL;
import {
  MdLockOutline,
  MdOutlineMailOutline,
  MdOutlineRemoveRedEye,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SuccessMsg from "../components/SuccessMsg";
import { Loading } from "../components/Loading";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${API}/api/user/signup`,
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data) {
        setIsError(true);
        setShowSuccess(true);
        setErrorMsg("Registered Successfully");
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      const missingFields = error.response?.data?.missingFields;
      const fallbackMsg = error.response?.data?.msg || "Signup failed";
      setIsError(false);
      if (missingFields) {
        setErrorMsg(`Please fill in: ${missingFields.join(", ")}`);
      } else {
        setErrorMsg(fallbackMsg);
      }
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <Loading />
      )}
      {showSuccess && <SuccessMsg msg={errorMsg} status={isError} />}
      <div className="pt-20 max-[376px]:pt-50 bg-sky-100 h-screen flex justify-center items-center py-8">
        <div className="bg-sky-200 rounded-2xl h-auto w-95 p-6 flex flex-col items-center backdrop-blur-3xl shadow-2xl shadow-sky-950">
          <h1 className="mt-4 font-medium text-xl">Register Now!</h1>
          <h1 className="text-center font-light text-sm mt-4">
            Read. Learn. Stay ahead — with Koushik Software Solutions (KSS
            BLOGS).
          </h1>

          {/* Firstname */}
          <div className="flex gap-2 mt-4 px-4 py-3 items-center bg-sky-100 rounded-lg w-full">
            <MdOutlinePersonOutline className="size-6" />
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Firstname"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Lastname */}
          <div className="flex gap-2 mt-4 px-4 py-3 items-center bg-sky-100 rounded-lg w-full">
            <MdOutlinePersonOutline className="size-6" />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Lastname"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="flex gap-2 mt-4 px-4 py-3 items-center bg-sky-100 rounded-lg w-full">
            <MdOutlineMailOutline className="size-6" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="flex gap-2 mt-4 px-4 py-3 items-center bg-sky-100 rounded-lg w-full">
            <MdLockOutline className="size-6" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <MdOutlineRemoveRedEye className="size-6 cursor-pointer" />
              ) : (
                <HiEyeOff className="size-6 cursor-pointer" />
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="w-full flex flex-col items-end">
            <div className="flex gap-2 mt-4 px-4 py-3 items-center bg-sky-100 rounded-lg w-full">
              <MdLockOutline className="size-6" />
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="flex-1 bg-transparent outline-none text-gray-700"
              />
            </div>
            <h1 className="mt-4 text-sm font-medium cursor-pointer">
              Forgot password?
            </h1>
          </div>

          {/* Submit */}
          <button
            className="mt-4 bg-sky-300 px-6 py-2 rounded-lg font-medium cursor-pointer hover:bg-sky-900 focus:ring focus:ring-sky-300 transition-all duration-300 hover:text-white"
            onClick={registerUser}
          >
            Get Started
          </button>

          {/* Divider */}
          <div className="flex items-center my-6 w-full">
            <div className="flex-grow border-t-4 border-dotted border-gray-400"></div>
            <span className="px-4 text-gray-500 text-sm whitespace-nowrap font-medium">
              Or sign up with
            </span>
            <div className="flex-grow border-t-4 border-dotted border-gray-400"></div>
          </div>

          {/* Google */}
          <FcGoogle className="size-20 bg-sky-100 p-4 rounded-2xl cursor-pointer" />

          {/* Login link */}
          <div className="flex mt-4 gap-1 items-center">
            <h1 className="font-light text-sm">Already have an account?</h1>
            <Link to="/login">
              <h1 className="font-medium cursor-pointer underline">Login</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
