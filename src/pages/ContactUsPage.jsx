import wheatField1 from "../assets/2.jpg";
import Navbar from "../Components/Navbar";
import { ContextLang } from "../context/ContexLang";
import { useContext } from "react";
import {  FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import HoverCard from '../UI/HoverCard'
import Form from '../Components/Form'
import Footer from "../Components/Footer";

const ContactUsPage = () => {
  const { lang, setLang } = useContext(ContextLang);
  const social = [BsWhatsapp,BsInstagram];
  return (
    <div className="max-w-[100vw] p-primary-px">
      <Navbar lang={lang} setLang={setLang} />

      <div className="w-full md:h-[30svh] lg:h-[50svh] bg-top relative after:absolute after:bg-black after:top-0 after:opacity-20 after:w-full after:h-full after:left-0 after:z-20">
        <img src={wheatField1} className="w-full h-full object-cover " />
        <h1 className="text-4xl md:text-6xl text-white z-40 font-Roboto absolute top-[50%] left-[50%] translate-x-[-50%]">
          {lang ? `Contact Us` : `تواصل معنا`}
        </h1>
      </div>
      <div className="relative primary-px mt-[5%] gap-6 flex flex-col justify-center items-center w-full ">
    
        <h1 className="section-title">{lang ? `Contacts` : `جهات التواصل`}</h1>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
          <HoverCard
            title={`${lang ? "Address" : "العنوان"}`}
            subtitle="Manage profile"
            href="#"
            bg={`white`}
            Icon={FaLocationDot}
          />
          <HoverCard
            bg={`white`}
            title={`${lang ? `Email` : `البريد الالكتروني`}`}
            subtitle="info@harvest-gp.com"
            href="#"
            Icon={FiMail}
          />
          <HoverCard
            title={`${lang ? `Contact` : `الهاتف`}`}
            subtitle="Manage team"
            href="#"
            bg={`white`}
            Icon={FaPhoneAlt}
          />
          <HoverCard
            title={`${lang ? `Social` : "جهات التواصل الاجتماعي"}`}
            // subtitle="Manage cards"
            href="#"
            bg={`white`}
            socialLinks={true}
            Icon={IoShareSocial}
          />
        </div>

        <div
          className={`relative w-full border-[1px] h-full flex flex-col gap-5 z-50  bg-white rounded-lg mb-[5%]  ${
            lang ? `py-[7%] pl-[7%]` : `rtl py-[7%] pr-[7%]`
          }`}
        > 
        {/* <img src={bgImg} className="absolute top-0 h-full z-[-5]"/> */}
          <h2 className="text-primary-green text-3xl font-bold self-center">
            {`${
              lang
                ? `Have any questions send us a Message`
                : `لديك سؤال ارسل لنا رسالة`
            }`}
          </h2>
          <div
            className={`w-full ${
              lang ? `translate-x-[5%]` : `translate-x-[-5%]`
            } `}
          >
            <Form lang={lang} />
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </div>
  );
};
export default ContactUsPage

