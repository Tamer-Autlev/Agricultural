import ship from "../assets/SVG/ship-svgrepo-com.svg";
import award from "../assets/SVG/award-medal-of-number-one-with-olive-branches-svgrepo-com.svg";
import money from "../assets/SVG/Fa-Team-Fontawesome-FontAwesome-Money-Bill-Transfer.svg";
const Advantegs = ({lang}) => {
  return (
    <section className="text-white max-w-[100vw] md:h-[350px] bg-primary-green mt-[20%] md:mt-[5%] relative after:absolute after:bg-header-papper after:rotate-0 after:w-full after:top-[-2%] after:md:top-[-3%] after:lg:top-[-4%] after:h-[16px] before:bg-grey-papper before:rotate-180 before:bottom-0 before:left-0 before:absolute before:w-full before:h-[16px] ">
      <div className="w-full h-full primary-px py-10 flex flex-col items-center justify-around pt-4 ">
        <h1 className="section-title">{`${lang ? "Our Gols" : "مميزاتنا"}`}</h1>
        <div className="flex w-full items-start justify-between mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-primary-yellow rounded-full p-3">
                <img src={ship} className="w-[75px] h-[75px]" />
              </div>
              <div className="text-center">
                <p className="font-bold text-[20px]">
                  {`${lang ? "Well-Established Logistics" : "لوجستية راسخة"}`}
                </p>
                <p className="font-semibold text-base px-8">
                  {`${
                    lang
                      ? `We operate across multiple countries Russia, UAE, and Egypt`
                      : ` نتواجد في عدة دول 
روسيا, الإمارات و مصر`
                  }`}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-primary-yellow rounded-full p-3">
                <img src={award} className="w-[75px] h-[75px]" />
              </div>
              <div className="text-center">
                <p className="font-bold text-[20px]">{`${
                  lang ? "High Quality" : "الجودة العالية"
                }`}</p>
                <p className="font-semibold text-base px-8">
                  {`${
                    lang
                      ? `We deliver premium global agricultural products through
                  innovative production methods and sustainable practices`
                      : `نحن نقدم منتجات زراعية عالية الجودة من خلال طرق إنتاج مبتكرة وممارسات مستدامة`
                  }`}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-primary-yellow rounded-full p-3">
                <img src={money} className="w-[75px] h-[75px]" />
              </div>
              <div className="text-center">
                <p className="font-bold text-[20px]">{`${
                  lang ? `Easy Money Transfer` : ` سهولة التحويلات المالية`
                }`}</p>
                <p className="font-semibold text-base px-8">
                  {`${
                    lang
                      ? `We provide flexible and personalized solutions for our clients`
                      : `نحن نقدم حلولا مرنة تناسب عملائنا`
                  }`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantegs;
