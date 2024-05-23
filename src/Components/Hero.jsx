import teamImg from "../assets/New/team.jpg";
import port from "../assets/New/port4.jpg";
import hero6 from "../assets/New/field.jpg";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {motion} from 'framer-motion'
const Hero = ({ lang }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [toggleImg, settoggleImg] = useState(false);
  const [sliderImg, setSliderImg] = useState([
    {
      img: hero6,
      text1: "Welcome To HAVREST-GP",
      text1Arb: `مرحبا بكم في HARVEST-GP`,
      text2:
        "We are committed  to quality, innovation, and sustainable practices that drives us forward. Join us on this fertile journey",
      text2Arb:
        "نحن ملتزمون بالجودة والابتكار والممارسات المستدامة التي تدفعنا إلى الأمام. انضم إلينا في هذه الرحلة الخصبة",
    },
    {
      img: port,
      text1: "Our Advantages",
      text1Arb: "ميزاتنا",
      text2:
        "Well-Established Logistics Chains Seamlessly connecting our products to the world with swift tailored decision-making",
      text2Arb:
        "سلاسل لوجستية راسخة تربط منتجاتنا بالعالم بسلاسة من خلال اتخاذ قرارات سريعة ومخصصة",
    },
    {
      img: teamImg,
      text1: "Meet Our Team",
      text1Arb: `تعرف على فريقنا`,
      text2:
        "Our strength lies in our team of Passionate Professionals committed to growth and sustainability",
      text2Arb:
        "تكمن قوتنا في فريقنا من المحترفين المتحمسين الملتزمين بالنمو والاستدامة",
    },
  ]);

    const sliderImages = [
    {
      img: hero6,
      text1: "Welcome To HAVREST-GP",
      text1Arb: `مرحبا بكم في HARVEST-GP`,
      text2:
        "We are committed  to quality, innovation, and sustainable practices that drives us forward. Join us on this fertile journey",
      text2Arb:
        "نحن ملتزمون بالجودة والابتكار والممارسات المستدامة التي تدفعنا إلى الأمام. انضم إلينا في هذه الرحلة الخصبة",
    },
    {
      img: port,
      text1: "Our Advantages",
      text1Arb: "ميزاتنا",
      text2:
        "Well-Established Logistics Chains Seamlessly connecting our products to the world with swift tailored decision-making",
      text2Arb:
        "سلاسل لوجستية راسخة تربط منتجاتنا بالعالم بسلاسة من خلال اتخاذ قرارات سريعة ومخصصة",
    },
    {
      img: teamImg,
      text1: "Meet Our Team",
      text1Arb: `تعرف على فريقنا`,
      text2:
        "Our strength lies in our team of Passionate Professionals committed to growth and sustainability",
      text2Arb:
        "تكمن قوتنا في فريقنا من المحترفين المتحمسين الملتزمين بالنمو والاستدامة",
    },
  ];

  let slideInterval;

  const prevImg = () => {
    settoggleImg(true);
    setTimeout(() => {
      settoggleImg(false);
    }, 300);
    currIndex === 0
      ? setCurrIndex(sliderImages.length - 1)
      : setCurrIndex(currIndex - 1);
  };
  const nexImg = () => {
    settoggleImg(true);
    setTimeout(() => {
      settoggleImg(false);
    }, 300);
    currIndex === sliderImages.length - 1
      ? setCurrIndex(0)
      : setCurrIndex(currIndex + 1);
  };
  const auto = () => {
    slideInterval = setInterval(nexImg, 700000);
  };

  useEffect(() => {
    auto();
    setSliderImg(sliderImages[currIndex]);
    return () => clearInterval(slideInterval);
  }, [nexImg, currIndex]);
  return (
    <section
      className={`${
        lang ? "" : "rtl"
      } max-w-[100vw] h-[100svh] overflow-hidden relative after:absolute after:hidden after:bg-white-papper after:z-30 after:w-full after:bottom-0 after:rotate-180 after:h-[16px]`}
    >
      <div
        className={`w-full h-full relative overflow-hidden after:absolute after:z-20 after:h-full after:w-full after:bg-[#1f1e17] after:opacity-[0.2] after:left-0 after:top-0  ${
          toggleImg
            ? "after:transition-transform duration-300 after:opacity-0 ease-in"
            : "transition-all duration-300 opacity-1 ease-in"
        }`}
      >
        <motion.img
          initial={{ scale: "0" }}
          animate={{
            scale: "120%",
          }}
          src={sliderImg.img}
          className={`w-full h-full object-cover 
          }`}
        />
      </div>
      <div
        className={`absolute  ${
          lang ? "left-[5%] md:left-[15%] " : "right-[15%]"
        } top-[50%] flex flex-col items-start gap-7 ${
          toggleImg
            ? "transition-transform duration-300 opacity-[0] ease-in translate-y-[20%]"
            : "transition-all duration-300 opacity-1 ease-in "
        }`}
      >
        <h1
          className={`z-30 drop-shadow-lg text-white font-Roboto text-2xl md:text-3xl lg:text-6xl font-bold ${
            toggleImg
              ? "transition-transform duration-300 opacity-[0] ease-in translate-y-[-20%]"
              : "transition-all duration-300 opacity-1 ease-in translate-y-0 "
          }`}
        >
          {lang ? sliderImg.text1 : sliderImg.text1Arb}
        </h1>
        <h2 className="drop-shadow-lg text-white font-Roboto text-xl lg:text-3xl font-semibold  md:w-[80vw] lg:w-[50vw] z-30">
          {lang ? sliderImg.text2 : sliderImg.text2Arb}
        </h2>
        <Link
          to="/about-us"
          className="drop-shadow-lg primary-transition btn py-3 px-5"
        >
          {`${lang ? `Discover More` : `اكتشف المزيد`}`}
        </Link>
      </div>
      {/* <div
        className={`${
          lang ? "left-[5%] md:left-[15%]" : "right-[5%] md:right-[15%]"
        } absolute flex bottom-[10%] bg-primary-orange h-[60px] w-[150px] cursor-pointer z-40 `}
      >
        <div
          className={`${
            lang ? `` : `order-2`
          } group relative text-white flex items-center justify-center w-full h-full after:bg-primary-orange-100 after:absolute after:inset-0 after:origin-right after:z-0 after:scale-x-0 after:transition-transform ease duration-[0.5s] hover:after:scale-x-100  `}
          onClick={prevImg}
        >
          <AiOutlineArrowLeft className="  text-3xl cursor-pointer z-10 group-hover:scale-110 translate-x-0 transition-translate ease duration-[0.3s] origin-right" />
        </div>
        <div
          className="group relative text-white flex items-center justify-center w-full h-full after:bg-primary-orange-100 after:absolute after:inset-0 after:origin-left after:z-0 after:scale-x-0 after:transition-transform ease duration-[0.3s] hover:after:scale-x-100  "
          onClick={nexImg}
        >
          <AiOutlineArrowRight className="text-3xl cursor-pointer z-10 group-hover:scale-110 translate-x-0 transition-translate ease duration-[0.5s] origin-right " />
        </div>
      </div> */}
      <div
        className={`absolute flex ${
          lang ? `` : `flex-row-reverse`
        } bottom-0 right-0 bg-primary-yellow w-[100px] md:h-[60px] md:w-[150px] cursor-pointer z-40 `}
      >
        <div
          className="group relative text-white flex items-center justify-center w-full h-full after:bg-[#ffd85a] after:absolute after:inset-0 after:origin-right after:z-0 after:scale-x-0 after:transition-transform ease duration-[0.5s] hover:after:scale-x-100  "
          onClick={prevImg}
        >
          <AiOutlineArrowLeft className=" text-3xl cursor-pointer z-10 group-hover:scale-110 translate-x-0 transition-translate ease duration-[0.3s] origin-right" />
        </div>
        <div
          className="group relative text-white flex items-center justify-center w-full h-full after:bg-[#ffd85a] after:absolute after:inset-0 after:origin-left after:z-0 after:scale-x-0 after:transition-transform ease duration-[0.3s] hover:after:scale-x-100  "
          onClick={nexImg}
        >
          <AiOutlineArrowRight className=" text-3xl cursor-pointer z-10 group-hover:scale-110 translate-x-0 transition-translate ease duration-[0.5s] origin-right " />
        </div>
      </div>
    </section>
  );
};
export default Hero;
