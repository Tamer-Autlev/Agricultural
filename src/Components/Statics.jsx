import CountUp from "react-countup";
import tree1 from '../assets/New/tree1.png'
import tree2 from '../assets/New/tree2.png'
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import wheat from "../assets/New/28.png";

const Statics = ({lang}) => {
  const [counter,setCounter]=useState(false)
  return (
    <div className="relatiev flex flex-col justify-center my-[5%] lg:my-[10%] primary-px items-center gap-12 relative after:hidden after:absolute after:bg-white-papper after:z-30 after:w-full after:rotate-180 after:left-0 after:top-[-1%] after:h-[16px]">
      <h1 className="text text-[25vw] lg:text-[13vw] lg:mt-[-150px]">{`${
        lang ? `Statics` : `إحصائيات `
      }`}</h1>
      <img
        src={wheat}
        className={`${
          !lang ? `bottom-[10%] right-0` : `img-flip left-0`
        } hidden lg:inline absolute w-[30vw]  lg:w-[20vw] md:h-[35vh] lg:h-[35vh] xl:h-[50vh]  z-30`}
      />
      <img
        src={wheat}
        className={`${
          !lang ? `bottom-[10%] img-flip left-0` : `right-0`
        } hidden lg:inline absolute w-[30vw] lg:w-[20vw] md:h-[35vh] lg:h-[35vh] xl:h-[50vh] z-30`}
      />
      <div className="md:w-[70%]  max-md:h-[70] w-full border-primary-green border rounded-lg p-5">
        <div className=" border border-primary-green rounded-md overflow-hidden flex h-[400px] md:h-[200px] flex-col md:flex-row justify-between">
          <div className="border-b md:border-r md:border-b-0 border-primary-green h-[calc(100%/3)] md:h-full md:w-[calc(100%/3)]  flex flex-col items-center justify-center gap-4 text-center">
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <span className="text-4xl font-semibold text-primary-yellow">
                {counter && <CountUp start={400} end={500} duration={2} />} 000+
                T
              </span>
              <p className="text-xl font-bold text-primary-green pt-4 lg:pt-6">
                {`${lang ? `Agricultural Crop Annually` : `محصول زراعي سنويا`}`}
              </p>
            </ScrollTrigger>
          </div>
          <div className="text-center border-b md:border-r md:border-b-0 border-primary-green h-[calc(100%/3)] md:h-full md:w-[calc(100%/3)] flex flex-col items-center justify-center gap-4">
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <span className="text-4xl font-semibold text-primary-yellow ">
                {counter && <CountUp start={44} end={144} duration={2} />} 000+
                T
              </span>
              <p className="text-xl font-bold text-primary-green pt-4 lg:pt-6">
                {`${lang ? `Sunflower Oil Annually` : `زيت عباد الشمس سنويا`}`}
              </p>
            </ScrollTrigger>
          </div>
          <div className=" text-center border-b md:border-none h-[calc(100%/3)] md:h-full md:w-[calc(100%/3)]  flex flex-col items-center justify-center gap-4">
            <ScrollTrigger
              onEnter={() => setCounter(true)}
              onExit={() => setCounter(false)}
            >
              <span className="text-4xl font-semibold text-primary-yellow  ">
                {counter && <CountUp start={260} end={360} duration={2} />} 000+
                T
              </span>
              <p className="text-xl font-bold text-primary-green pt-4 lg:pt-6">
                {`${lang ? `Flour Annually` : `طحين سنويا`}`}
              </p>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
