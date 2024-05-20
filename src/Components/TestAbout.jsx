import wheatField from "../assets/cta-1-bg-1.jpg";
import farm from "../assets/farm.png";
import tractor from "../assets/project-2-1.jpg";

const TestAbout = () => {
  return (
    <section className="px-6 lg:px-[15%] h-screen max-w-full">
      <div className="w-full h-full flex items-center gap-4 mt-[10%] z-50 relative">
        <div className="relative ml-[10%] w-[50%] h-full rounded-lg overflow-hidden">
          <img
            src={wheatField}
            className="w-full h-full object-cover"
            alt="Wheat field"
          />
          <img
            src={tractor}
            className="absolute rounded-lg w-[40%] h-[30%] bottom-[10%] z-30 left-[-10%] object-center"
            alt="Tractor"
          />
        </div>
        <div className="bg-white ml-auto mr-[-10%] rounded-lg mt-[100px] pt-[100px] pl-[10%] w-[50%] flex flex-col items-start justify-start h-full">
          <h1 className="text-[20px] font-extrabold font-Roboto text-primary-yellow">
            Welcome HARVEST-GP
          </h1>
          <h2 className="text-5xl font-mono font-bold mt-6 text-primary-green w-full">
            Leading the Way in Agricultural Export and Production
          </h2>
          <p className="text-lg font-Roboto leading-9 mt-6 text-gray-500 z-50">
            <span className="font-bold">Harvest-gp</span> is a leading group of
            companies in the field of exporting agricultural grains and
            producing sunflower oil and wheat flour. The company distinguishes
            itself by its strong commitment to product quality, social
            responsibility, and environmental responsibility.
          </p>
        </div>
        <img
          src={farm}
          className="absolute w-[40%] bottom-[5%] right-[-10%] z-30"
          alt="Farm"
        />
      </div>
    </section>
  );
};

export default TestAbout;
