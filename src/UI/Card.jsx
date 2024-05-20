const Card = ({ text, img, svg, category,lang}) => {
  return (
    <>
      <div className="relative py-5 md:w-[50%] h-[500px] bg-white rounded-lg flex flex-col items-center p-6 gap-4 text-center overflow-hidden  ">
        <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-primary-green overflow-hidden">
          <img src={img} className="w-full h-full object-cover rounded-full" />
        </div>
        <p className="text-base font-semibold text-center md:mt-4">{text}</p>
        <div
          className={`absolute h-[100px] bg-primary-green bottom-0 w-full flex items-center justify-center gap-2 ${
            lang ? "" : "rtl"
          }`}
        >
          <img src={svg} className="h-[45%] md:h-[50%]" />
          <span className="text-lg md:text-xl font-bold text-white font-Roboto ">
            {category}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
