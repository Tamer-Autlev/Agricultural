import About from "../Components/About";
import Advantegs from "../Components/Advantegs";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import SwipeCarousel from "../Components/Hero2";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Statics from "../Components/Statics";
import Partner from "../Components/Partner";
import { useContext,useEffect } from "react";
import { ContextLang } from "../context/ContexLang";
const HomePage = () => {
  const { lang, setLang } = useContext(ContextLang);
  const updateUser=(e)=>{
    setLang(e)
  }
  return (
    <>
      <Navbar lang={lang} setLang={updateUser} />
      <Hero setLang={updateUser} lang={lang} />
      <About lang={lang} />
      <Advantegs lang={lang} />
      <Services lang={lang} />
      <Statics lang={lang} />
      <ContactUs lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default HomePage;
