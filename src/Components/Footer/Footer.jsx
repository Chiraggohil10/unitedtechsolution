import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from "../../assets/logoo.png";
import { IoIosMail } from "react-icons/io";
import Mail from "../OpenMail";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact"  className='scroll-mt-30' >
      <footer className="text-gray-300 py-10 px-4  lg:px-20  shadow-2xl mt-10 shadow-gray-900">
      <div>
        <div className="flex flex-wrap justify-between items-start gap-7 lg:gap-5">
          <div >
            <img src={Logo} className="sm:mr-4 w-14 sm:w-20" alt="" />
            <p className="mt-4 text-sm md:text-base text-black font-semibold">
              Stay Informed, Stay Inspired – Subscribe for the Latest Updates.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="lg:w-[60%] w-[70%] p-2 rounded-l-lg text-black border border-gray-400 outline-none"
              />
              <button className="p-2 bg-blue-600 rounded-r-lg text-white">
                Subscribe
              </button>
            </form>
          </div>

        
          <div>
            <h3 className="text-sm font-semibold uppercase text-left text-black">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-black font-semibold">
              <li
                className="cursor-pointer hover:text-blue-600 duration-500"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </li>
              <li
                className="cursor-pointer hover:text-blue-600 duration-500"
                onClick={() => scrollToSection("services")}
              >
                Services
              </li>
              <li
                className="cursor-pointer hover:text-blue-600 duration-500"
                onClick={() => scrollToSection("careers")}
              >
                Careers
              </li>
              <li
                className="cursor-pointer hover:text-blue-600 duration-500"
                onClick={() => navigate("/privacy")}
              >
                Privacy Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-left text-black">
              Contact Us
            </h3>
            <div className="mt-4 flex items-center cursor-pointer text-black hover:text-blue-600">
              <IoIosMail className="mr-2 text-xl" />
              <Mail />
            </div>
            <div
              className="mt-4 flex items-center cursor-pointer text-black hover:text-blue-600"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps?q=F-47,Signet+Mall,Kamrej",
                  "_blank"
                )
              }
            >
              <IoLocationOutline className="mr-2 text-xl" />
              <p>Australia</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-left text-black">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.facebook.com/unitedtechandsolutions?mibextid=wwXIfr&rdid=ZPoeekldKBSDSl11&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18mu7X5Ggu%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                className="text-black text-2xl hover:text-blue-600 duration-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/united-tech-and-solutions/"
                target="_blank"
                className="text-black text-2xl hover:text-blue-600 duration-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/united_tech_and_solutions"
                target="_blank"
                className="text-black text-2xl hover:text-blue-600 duration-400"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-black">
          <p className="font-semibold hover:text-blue-600 duration-400">
            Copyright © unitedtechandsolutions
          </p>
        </div>
      </div>
    </footer>
    </section>
  );
}

export default Footer;