import logo1 from '../assets/partners/3.png'
import logo2 from '../assets/partners/2.png'
const Partner = ({lang}) => {
  return (
    <section className="text-white max-w-[100vw] md:h-[300px] bg-white  relative  after:absolute after:bg-white-papper after:rotate-180 after:w-full after:top-[-3%] after:md:top-[-4%] after:lg:top-[-5%] after:h-[16px] before:bg-grey-papper before:rotate-180 before:bottom-0 before:left-0 before:absolute before:w-full before:h-[16px] ">
      <div className="w-full h-full primary-px py-10 flex flex-col items-center justify-around pt-4 ">
        <h1 className="section-title">{`${lang ? "Partners" : "شركاؤنا"}`}</h1>
        <div className="w-full flex flex-col gap-7 mt-7 md:gap-0 md:mt-0 md:flex-row items-center justify-between md:px-[20%]">
          <img src={logo1} className=" h-[150px]" />
          <img src={logo2} className=" h-[150px]" />
        </div>
      </div>
    </section>
  );
}

export default Partner
