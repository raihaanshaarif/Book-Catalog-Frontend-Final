import { useState } from "react";

import { HiBookOpen } from "react-icons/hi";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          {/* logo section */}
          <Link to={"/"}>
            <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
              <HiBookOpen className="w-7 h-7 " />
              <span className="text-blue-600">Book Catalog</span>
            </div>
          </Link>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-2xl"
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => (
              <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button className="btn bg-blue-600 text-white md:ml-5 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-blue-500">
              SignUp
            </button>
            <button className="btn bg-blue-600 text-white md:ml-3 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-blue-500">
              SignIn
            </button>
          </ul>
          {/* button */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
