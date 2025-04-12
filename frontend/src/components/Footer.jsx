import React from 'react';
import logo from '/logo.png';
import { Link } from 'react-router-dom';
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/category/business", label: "Business" },
    { to: "/category/tech", label: "Tech" },
    { to: "/category/career", label: "Career" },
    { to: "/category/job", label: "Jobs" },
    { to: "/category/product-design", label: "Product Design" },
  ];

  return (
    <footer className="bg-sky-950 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col items-start md:w-2/3">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Logo" className="w-16 h-16 mr-3" />
            <h1 className="text-2xl font-semibold">KSS Blogs</h1>
          </div>
          <p className="text-sm max-w-2xl leading-relaxed">
            KSS Blogs brings you the latest insights in Business, Tech, Jobs, Careers, and Product Design.
            Curated by industry minds, we focus on real-world trends, practical advice, and innovations.
            Whether you're a student, professional, or founder — there's something here for you.
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/koushiksoftwaresolutions" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <GrInstagram size={20} />
              </a>
              <a href="https://www.youtube.com/@koushiksoftwaresolutions" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FaYoutube size={20} />
              </a>
              <a href="https://x.com/koushiksoftsol" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/koushik-software-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Explore</h2>
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <Link key={index} to={item.to} className="hover:underline text-sm">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
