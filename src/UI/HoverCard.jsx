import { Link } from "react-router-dom";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { useContext } from "react";
import { ContextLang } from "../context/ContexLang";
const Card = ({ title, subtitle, Icon, to, socialLinks,bg }) => {
  const {lang} =useContext(ContextLang)
  return (
    <Link
      to={to}
      className={`bg-${bg} w-full ${lang?``:`rtl`} flex flex-col justify-center gap-2 p-4 rounded border-[1px] hover:border-none   relative h-[200px] overflow-hidden group `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a7f64] to-primary-green translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className={`absolute z-10 -top-12 ${lang?`-right-0`:`-left-0`}  text-9xl text-primary-green group-hover:text-primary-yellow group-hover:rotate-12 transition-transform duration-300`}/>
      <Icon className="mb-2 text-2xl text-primary-green group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
      {socialLinks && (
        <div className="flex gap-5 z-[999] text-primary-orange">
          <Link target="_blank" to="https://www.instagram.com/blacksmithuae">
            <BsInstagram className="text-2xl  cursor-pointer text-primary-green group-hover:text-white transition-colors relative z-50 duration-300" />
          </Link>
          <Link target="_blank" to="https://wa.me/+971529934946">
            <BsWhatsapp className="text-2xl  cursor-pointer text-primary-green group-hover:text-white transition-colors relative z-50 duration-300" />
          </Link>
        </div>
      )}
    </Link>
  );
};
export default Card
