import logo from "../assets/logo1.png";
import { BsWhatsapp, BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import DropDown from '../UI/DropDown'
const Navbar = ({ setLang, lang }) => {
  const [hidden, setHidden] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && previous > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  
  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-200%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`max-w-[100vw] fixed top-0 z-[80] w-full ${
        hidden ? "bg-transparent" : "bg-primary-green"
      } py-3 ${lang ? "" : "rtl"}`}
    >
      <motion.nav
        className={`w-full relative flex justify-between primary-px items-center after:bg-header-papper after:hidden after:rotate-180 after:bg-auto after:bg-center ${
          hidden ? "after:hidden" : ""
        } after:absolute after:z-30 after:w-full after:left-0 after:h-4 after:bottom-[-25px] `}
      >
        <div
          className={`absolute text-md font-semibold ${
            lang ? `right-[5%]` : `left-[5%]`
          } top-[25%] z-50 text-white`}
        ></div>

        <Link to="/" className="max-md:w-[80px]">
          <img src={logo} className="w-[80px] m-0 p-0" />
        </Link>
        <div className="hidden lg:flex justify-between items-center gap-x-6 text-md text-white font-Roboto ">
          <Link
            to="/"
            className="primary-transition hover:text-primary-yellow font-bold"
          >
            {`${lang ? `Home` : `الرئيسية`}`}
          </Link>
          <Link
            to="/about-us"
            className="primary-transition hover:text-primary-yellow font-bold"
          >
            {`${lang ? `About` : `من نحن`}`}
          </Link>

          <Link
            to="/contact-us"
            className="primary-transition flex items-center justify-center py-3 px-4 primary-transition btn "
          >
            {`${lang ? `Contact Us` : `تواصل معنا`}`}
          </Link>
          <DropDown setLang={setLang} lang={lang} />
        </div>
        <div
          className={`lg:hidden mr-[-30px] relative justify-self-end flex flex-col gap-1 items-center justify-center w-[102px] h-full cursor-pointer z-[1000] after:bg-primary-orange-100
        } after:absolute after:inset-0 after:origin-left after:scale-x-0 after:transition-transform ease duration-[0.5s] hover:after:scale-x-100  bg-primary-orange
        }`}
          onClick={() => setToggle(!toggle)}
        >
          <span
            className={`w-[30px] h-[3px] bg-primary-yellow z-10 transition-all ease duration-[0.3s]  ${
              toggle ? "rotate-45 translate-y-[7px]  " : ""
            } `}
          />
          <span
            className={`w-[30px] h-[3px] bg-primary-yellow z-10 transition-all ease duration-[0.3s] ${
              toggle ? "translate-x-[100%] opacity-0" : ""
            } `}
          />
          <span
            className={`w-[30px] h-[3px] bg-primary-yellow z-10 transition-all ease duration-[0.3s] ${
              toggle ? "rotate-[-45deg] translate-y-[-7px]" : ""
            } `}
          />
        </div>
        {toggle && (
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
            className={`absolute top-0 flex rtl z-[999] flex-col justify-center itmes-center h-[100svh] ${
              lang ? `right-0` : `left-0`
            } w-[50vw] bg-primary-green `}
          >
            <div className="flex flex-col justify-center items-center gap-7">
              <img src={logo} className="w-[100px] mb-7" />

              <Link
                to="/about-us"
                className="navbar-link"
                onClick={() => setToggle(!toggle)}
              >
                {`${lang ? `Home` : `الرئيسية`}`}
              </Link>
              <Link
                to="/services"
                className="navbar-link "
                onClick={() => setToggle(!toggle)}
              >
                {`${lang ? `About` : `من نحن`}`}
              </Link>
              <Link
                to="/contact-us"
                className="navbar-link"
                onClick={() => setToggle(!toggle)}
              >
                {`${lang ? `Contact` : `تواصل معنا`}`}
              </Link>
              <div className="pt-[30px]">
                <div className="flex flex-col gap-2 mb-[25px]"></div>
                <Link
                  to="/contact-us"
                  className="w-full text-[25px] text-white pr-[20px] mb-[15px] lg:mb-0 "
                ></Link>
              </div>
              <DropDown setLang={setLang} lang={lang} />
            </div>
            <div className=" absolute bottom-[5%] left-[50%] flex gap-4 text-white translate-x-[-50%]">
              <Link
                target="_blank"
                to="https://www.instagram.com/blacksmithuae"
              >
                <BsInstagram className="text-2xl cursor-pointer hover:text-primary-yellow transition-all ease duration-[0.3s] " />
              </Link>
              <Link target="_blank" to="https://wa.me/+971529934946>">
                <BsWhatsapp className="text-2xl cursor-pointer hover:text-primary-yellow transition-all ease duration-[0.3s]" />
              </Link>
              <Link to="">
                <FaPhone className="text-2xl cursor-pointer hover:text-primary-yellow transition-all ease duration-[0.3s]" />
              </Link>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </motion.header>
  );
};

export default Navbar;
