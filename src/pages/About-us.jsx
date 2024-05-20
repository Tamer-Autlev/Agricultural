import About from '../Components/About';
import Advantegs from '../Components/Advantegs';
import Navbar from '../Components/Navbar'
import wheatField from '../assets/cta-1-bg-1.jpg'
import wheatField1 from '../assets/2.jpg'
import bgImg from '../assets/bg-img/testimonials-bg-1-1.png'
import bgImg1 from '../assets/bg-img/footer-bg-icon-1.png'
import { useContext } from 'react';
import { ContextLang } from '../context/ContexLang';
import AboutUsPage from '../Components/AboutUsPage';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';
const AboutUs = () => {
  
   const {lang,setLang} = useContext(ContextLang);
  return (
    <section className="max-w-[100vw] p-primary-px ">
      <Navbar lang={lang} setLang={setLang} />
      <div className="w-full md:h-[30svh] lg:h-[50svh] bg-top relative after:absolute after:bg-black after:top-0 after:opacity-20 after:w-full after:h-full after:left-0 after:z-20">
        <img src={wheatField1} className="w-full h-full object-cover " />
        <h1 className='text-4xl md:text-6xl text-white z-40 font-Roboto absolute top-[50%] left-[50%] translate-x-[-50%]'>{lang?`About Us`:`من نحن`}</h1>
      </div>
      <About lang={lang} />
      <div className="w-full bg-primary-green h-[70vh] relative mt-[50px] flex items-center justify-center ">
        <div className="absolute w-full h-full bottom-0">
          <img
            src={bgImg}
            className=" w-full h-full object-cover opacity-[0.05] "
          />
        </div>

        <AboutUsPage />
      </div>
      {/* <Advantegs lang={lang} /> */}
      <ContactUs lang={lang} />
      <Footer lang={lang} />
    </section>
  );
}

export default AboutUs