import { Link } from "react-router-dom";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import logo from "../assets/logo.png";
import RemoveExtraSpace from "../UI/RemoveExtraSpace";
import fieldImg from "../assets/bg-img/footer-bg-icon-1.png"; 
import fieldImg1 from "../assets/bg-img/team-bg-1-1.png"; 
import fieldImg2 from "../assets/bg-img/testimonials-bg-1-1.png"; 

const Footer = ({lang}) => {
  return (
    <footer
      className={`relative ${
        lang ? `` : `rtl`
      } max-w-[100vw]  primary-px min-h-[40vh] bg-primary-green flex flex-col justify-between items-center `}
    >
      <div
        className={`absolute w-[100%] h-[100%] `}
      >
        <img
          src={fieldImg2}
          className={`opacity-5 w-full object-cover h-full `}
        />
      </div>
      <div className="flex flex-wrap w-full z-30 text-white justify-between md:justify-between pt-[90px]  ">
       
        <ul>
          <li className=" footer-list-title">{`${
            lang ? `Company` : `الشركة`
          }`}</li>
          <li className="footer-list pb-3">
            <Link to="/">{`${lang ? `Home` : `الرئيسية`}`}</Link>
          </li>
          <li className="footer-list pb-3">
            <Link to="/about-us">About</Link>
          </li>
          <li className="footer-list">
            <Link to="/contact-us">{`${lang ? `Contact` : `التواصل`}`}</Link>
          </li>
        </ul>

        <ul className="hidden md:inline">
          <li className=" footer-list-title">{`${
            lang ? `Contacts` : `جهات التواصل`
          }`}</li>
          <li className="footer-list pb-3 ">
            <Link to="mailto:Rami@blacksmith-uae.com">
              {`${
                lang
                  ? `Email: info@harvest-gp.com`
                  : `البريد الالكتروني: info@harvest-gp.com`
              }`}
            </Link>
          </li>
          <li className="footer-list">
            <Link to="tel: 0529934946">{`${
              lang ? `Phone: 0529934946` : `الهاتف: 58489498`
            }`}</Link>
          </li>
        </ul>

        <ul>
          <li className="footer-list-title">{`${
            lang ? `Social` : `التواصل الاجتماعي`
          }`}</li>
          <div className="flex gap-4 text-primary-hover">
            <Link target="_blank" to="https://www.instagram.com/blacksmithuae">
              <BsInstagram className="text-2xl cursor-pointer hover:text-primary-yellow transition-all ease duration-[0.3s] " />
            </Link>
            <Link target="_blank" to="https://wa.me/+971529934946>">
              <BsWhatsapp className="text-2xl cursor-pointer hover:text-primary-yellow transition-all ease duration-[0.3s]" />
            </Link>
          </div>
        </ul>
      </div>
      <div className=" z-30 flex justify-start w-full my-[30px] md:hidden">
        <ul>
          <li className=" footer-list-title">Contacts</li>
          <li className="footer-list pb-3">Email: info@harvest-gp.com</li>
          <li className="footer-list">
            <Link to="tel: 0529934946">Phone: 0529934946</Link>
          </li>
        </ul>
      </div>
      <div className=" mb-5 text-white z-30 flex justify-center items-end self-center ">
        <h1>
          &copy; Copyright 2023 {` `}
          <Link
            target="_blank"
            to="https://tamer-autlev-portfolio.com/"
            className="hover:text-primary-yellow transition-all ease-out duration-200"
          >
            Tamer-Mohamad
          </Link>
          .All Rights Reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
