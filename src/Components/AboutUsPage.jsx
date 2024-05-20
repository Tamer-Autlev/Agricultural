import { useContext } from "react";
import { ContextLang } from "../context/ContexLang";
import vision from '../assets/SVG/eye-svgrepo-com.svg'
import team from '../assets/SVG/team-3-svgrepo-com.svg'
import gols from '../assets/SVG/target.svg'
const AboutUsPage = ({}) => {
  const {lang} =useContext(ContextLang)
    return (
      <section className="text-white w-full h-full mg:h-[350px] relative after:absolute after:bg-header-papper after:rotate-0 after:w-full after:top-[0] after:hidden after:md:top-[-3%] after:lg:top-[-4%] after:h-[16px] ">
        <div className="w-full h-full primary-px py-10 flex flex-col items-center justify-around pt-4 ">
          <div className="flex w-full items-start justify-between mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary-yellow rounded-full p-3">
                  <img src={gols} className="w-[75px] h-[75px]" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl mb-3">
                    {`${lang ? "Our Mission" : "لوجستية راسخة"}`}
                  </p>
                  <p className="font-semibold text-base px-8">
                    {`${
                      lang
                        ? `We aim to provide high-quality agricultural products that meet the
          needs of customers worldwide. This is achieved through innovation in
          production processes and sustainability in agricultural practices`
                        : `نهدف إلى تقديم منتجات زراعية عالية الجودة تلبي احتياجات العملاء في جميع أنحاء العالم، وذلك من خلال الابتكار في عمليات الإنتاج والاستدامة في الممارسات الزراعية`
                    }`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary-yellow rounded-full p-3">
                  <img src={vision} className="w-[75px] h-[75px]" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl mb-3">{`${
                    lang ? "Our Vision" : "الجودة العالية"
                  }`}</p>
                  <p className="font-semibold text-base px-8">
                    {`${
                      lang
                        ? `We firmly believe in the power of teamwork and continuous collaboration with our farmers, customers, and partners to achieve shared goals and sustainable growth`
                        : `نحن نقدم منتجات زراعية عالية الجودة من خلال طرق إنتاج مبتكرة وممارسات مستدامةنؤمن بأهمية العمل بروح الفريق والتعاون المستمر مع المزارعين والعملاء والشركاء، من أجل تحقيق مصالح مشتركة ونمو مستدام.`
                    }`}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary-yellow rounded-full p-3">
                  <img src={team} className="w-[75px] h-[75px]" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl mb-3">{`${
                    lang ? `Our Team` : ` سهولة التحويلات المالية`
                  }`}</p>
                  <p className="font-semibold text-base px-8">
                    {`${
                      lang
                        ? `Our team of experts Includes experienced professionals with diverse skills in agriculture, production, and export. They are dedicated to providing our customers with the highest quality services and products`
                        : `نحن نقدم حلولا مرنة تناسب عملائنايضم فريقنا الفني والإداري مجموعة من المحترفين ذوي الخبرة والمهارات المتعددة في مجالات الزراعة والإنتاج والتصدير، مع التزامهم الشديد بتقديم أفضل الخدمات والمنتجات لعملائنا`
                    }`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUsPage