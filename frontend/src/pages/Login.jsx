import React, { useState } from "react";
import {
  MdLockOutline,
  MdOutlineMailOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
const API = import.meta.env.VITE_API_BASE_URL;
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SuccessMsg from "../components/SuccessMsg"; 
import { Loading } from "../components/Loading";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const loginUser = async () => {
    setLoading(true)
    try {
      const res = await axios.post(
        `${API}/api/user/login`,
        { email, password },
        { withCredentials: true }
      );

      if (res.data) {
        setErrorMsg("Login successful!");
        setIsError(true);
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      const missingFields = error.response?.data?.missingFields;
      const fallbackMsg = error.response?.data?.msg || "Login failed";

      if (missingFields) {
        setErrorMsg(`Please fill in: ${missingFields.join(", ")}`);
      } else {
        setErrorMsg(fallbackMsg);
      }
      setIsError(false);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <>
    {loading && (
        <Loading />
      )}
      {showToast && <SuccessMsg msg={errorMsg} status={isError} />}
      <div className="pt-20  bg-sky-100 h-screen flex justify-center items-center py-8">
        <div className="bg-sky-200 rounded-2xl h-auto w-95 p-6 flex flex-col items-center backdrop-blur-3xl shadow-2xl shadow-sky-950">
          <h1 className="mt-4 font-medium text-xl">Sign in with email</h1>
          <h1 className="text-center font-light text-sm mt-4">
            Read. Learn. Stay ahead — with Koushik Software Solutions (KSS BLOGS).
          </h1>

          <div className="flex gap-2 mt-4 px-4 py-3 items-center bg-sky-100 rounded-lg w-full">
            <MdOutlineMailOutline className="size-6" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              type="text"
              placeholder="Email"
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
          </div>

          <div className="w-full flex flex-col items-end">
            <div className="flex gap-2 mt-4 px-4 py-3 items-center bg-sky-100 rounded-lg w-full">
              <MdLockOutline className="size-6" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && loginUser()}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="flex-1 bg-transparent outline-none text-gray-700"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <MdOutlineRemoveRedEye className="size-6 cursor-pointer" />
                ) : (
                  <HiEyeOff className="size-6 cursor-pointer" />
                )}
              </button>
            </div>
            <h1 className="mt-4 text-sm font-medium cursor-pointer">
              Forgot password?
            </h1>
          </div>

          <button
            onClick={loginUser}
            className="mt-4 bg-sky-300 px-6 py-2 rounded-lg font-medium cursor-pointer hover:bg-sky-900 focus:ring focus:ring-sky-300 transition-all duration-300 hover:text-white"
          >
            Get Started
          </button>

          <div className="flex items-center my-6 w-full">
            <div className="flex-grow border-t-4 border-dotted border-gray-400"></div>
            <span className="px-4 text-gray-500 text-sm whitespace-nowrap font-medium">
              Or sign in with
            </span>
            <div className="flex-grow border-t-4 border-dotted border-gray-400"></div>
          </div>

          <FcGoogle className="size-20 bg-sky-100 p-4 rounded-2xl cursor-pointer" />

          <div className="flex mt-4 gap-1 items-center">
            <h1 className="font-light text-sm">Don't have an account?</h1>
            <Link to="/signup">
              <h1 className="font-medium cursor-pointer underline">Register now</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
