import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import wheat from '../assets/New/hero_one-slider-3.jpg'
import bgImg from '../assets/New/text-bg-1.jpg'
import Form from './Form'
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import HoverCard from '../UI/HoverCard'
const ContactUs = ({lang}) => {
  return (
    <section
      className={`${
        lang ? "" : "rtl"
      } max-w-[100vw]  relative overflow-hidden flex gap-4 flex-col-reverse lg:flex-row lg:gap-0 items-center justify-center primary-px bg-primary-offWhite py-[7%] before:bg-grey-papper before:rotate-180 before:left-0 before:absolute before:w-full before:top-[-1.5%] before:h-[16px]`}
    >
     
      <div
        style={{ backgroundImage: `url(${wheat})` }}
        className={`relative md:w-[100%] h-[80vh] lg:w-[50%] rounded-lg after:rounded-lg w-full bg-cover flex after:bg-black items-center justify-center  after:absolute after:left-0 after:top-0 after:w-full after:opacity-10 after:h-full `}
      >
        <div
          className={`flex flex-col  w-[90%] bg-white gap-5 z-50  rounded-lg  ${
          lang ? `py-[7%] pl-[7%]` : `rtl py-[7%] pr-[7%]`}
        `}
        >
          <div className={``}>
            <h1 className="text-xl text-primary-yellow font-semibold font-Roboto">
              {`${lang ? `Have Questions?` : `لديك سؤال`}`}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-primary-green">
              {`${lang ? `Send us a Message` : `أرسل لنا رسالة`}`}
            </h2>
            <Form lang={lang} />
          </div>
        </div>
      </div>
      <div
        className={`w-full md:w-[100%] lg:w-[50%] md:mt-[-3%] h-full ${
          lang ? `lg:ml-[7%]` : `lg:mr-[7%]`
        }  flex flex-col gap-9 z-30`}
      >
        <h3 className="text-4xl font-bold text-primary-yellow mt-[8%] ">
          {`${lang ? `Contacts` : `جهات التصوال`}`}
        </h3>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <HoverCard
            title={`${lang ? "Address" : "العنوان"}`}
            subtitle="Russia, Adygea Republic, Maykop"
            href="#"
            Icon={FaLocationDot}
            bg={`white`}
          />
          <HoverCard
            to="mailto:info@harvest-gp.com"
            title={`${lang ? `Email` : `البريد الالكتروني`}`}
            subtitle="info@harvest-gp.com"
            href="#"
            bg={`white`}

            Icon={FiMail}
          />

          <HoverCard
            to="tel: +79957996190"
            title={`${lang ? `Contact` : `الهاتف`}`}
            subtitle="+79957996190"
            href="#"
            Icon={FaPhoneAlt}
            bg={`white`}

          />
          <HoverCard
            title={`${lang ? `Social` : "جهات التواصل الاجتماعي"}`}
            // subtitle="Manage cards"
            href="#"
            socialLinks={true}
            Icon={IoShareSocial}
            bg={`white`}

          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
