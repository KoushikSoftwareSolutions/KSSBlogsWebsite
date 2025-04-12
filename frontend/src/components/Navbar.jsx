import React, { useState, useEffect } from "react";
import logo from "/logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API}/api/user/profile`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setUser(res.data.data);
        }
        setLoading(false)
      } catch (err) {
        console.log("Error fetching user:", err);
      } 
      finally{
        setLoading(false)
      }
    };
    fetchProfile();
  }, []);

  const logoutUser = async () => {
    try {
      await axios.post(`${API}/api/user/logout`, null, {
        withCredentials: true,
      });      
      setUser(null);
      window.location.reload();
    } catch (e) {
      console.log("Error fetching user:", e);
    }
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/business", label: "Business" },
    { to: "/tech", label: "Tech" },
    { to: "/career", label: "Career" },
    { to: "/job", label: "Jobs" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 backdrop-blur-2xl">
      <div className="w-full container mx-auto flex items-center justify-between h-16 mt-2 md:mr-10">
        <Link to="/">
          <img src={logo} alt="logo" width={120} />
        </Link>

        {/* Animated Icon Button */}
        <button
          className="relative w-10 h-10 flex items-center justify-center bg-white p-2 text-lg rounded-lg md:hidden mr-6 overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger icon */}
          <span
            className={`absolute transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            <MdOutlineMenu />
          </span>

          {/* Close icon */}
          <span
            className={`absolute transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <MdOutlineClose />
          </span>
        </button>

        <div className="md:flex md:gap-4 hidden">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              onClick={() => setActiveLink(item.to)}
              className={`relative font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-sky-300 after:transition-all ${
                activeLink === item.to
                  ? "text-white after:w-full"
                  : "text-gray-400 hover:text-white/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="md:flex md:gap-4 font-medium hidden items-center">
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          ) : user ? (
            <>
              <span className="text-white">Hi, {user.firstName}</span>
              <button
                className="bg-red-500 px-4 py-2 rounded-lg text-white ml-2"
                onClick={logoutUser}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-white px-4 py-2 rounded-lg cursor-pointer">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-white px-4 py-2 rounded-lg cursor-pointer">
                  SignUp
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="animate-slide-down md:hidden">
          <div className="flex flex-col gap-2 bg-white/10 backdrop-blur-3xl py-4 items-center">
            {navItems.map((item, index) => (
              <Link
                to={item.to}
                key={index}
                onClick={() => {
                  setActiveLink(item.to);
                  setIsOpen(false);
                }}
                className={`font-medium ${
                  activeLink === item.to ? "text-sky-300" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="md:flex md:gap-4 font-medium flex gap-4">
              {user ? (
                <div className="mt-4 flex items-center justify-around w-screen md:hidden">
                  <span className="text-white">Hi, {user.firstName}</span>
                  <button
                    className="bg-red-500 px-4 py-2 rounded-lg text-white ml-2"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <button
                      className="bg-white px-4 py-2 rounded-lg cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button
                      className="bg-white px-4 py-2 rounded-lg cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      SignUp
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
