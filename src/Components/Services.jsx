import Card from "../UI/Card";
import wheatImg from "../assets/New/intro-bg-1.jpg";
import sunflowerSVG from "../assets/SVG/sunflower-svgrepo-com.svg";
import sunflowerImg from "../assets/sunflower.jpg";
import wheatSVG from "../assets/SVG/wheat.svg";
import flourSVG from "../assets/SVG/flour-svgrepo-com.svg";
import flourImg from '../assets/Flour Sack1.jpg'
const Services = ({lang}) => {
  const cardContent = [
    {
      textEng: `We offer a wide range of agricultural products, including wheat,
          barley, corn, and more. Our crops are grown using the latest
          agricultural techniques and under the supervision of specialists to
          ensure the quality of the final product`,
      textArb: `نقدم مجموعة واسعة من الغلال الزراعية مثل القمح، الشعير، ، والذرة. تتم زراعتها باستخدام أحدث التقنيات الزراعية وبإشراف متخصصين لضمان جودة المنتج النهائي`,
      img: wheatImg,
      svg: wheatSVG,
      categoryEng: `Agricultural Crop`,
      categoryArb: `الغلال الزراعية`,
    },
    {
      textEng: `Premium sunflower oil is meticulously extracted from the finest sunflower seeds, rendering it an excellent choice for both healthy cooking and tasty meals`,
      textArb: `يتم استخراج زيت عباد الشمس الطبيعي من أفضل أنواع البذور، مما يجعله مثاليًا للاستخدام في الطهي الصحي والمأكولات الشهية`,
      img: sunflowerImg,
      svg: sunflowerSVG,
      categoryEng: `Sunflower Oil`,
      categoryArb: `زيت عباد الشمس`,
    },
    {
      textEng: `We offer high-quality flour that is distinguished by its purity and perfect texture for preparing a variety of bakery products and sweets`,
      textArb: `نقدم طحينا ذو جودة عالية يتميز بنقاوته وقوامه المثالي لتحضير مجموعة متنوعة من المنتجات الخبزية والحلويات`,
      img: flourImg,
      svg: flourSVG,
      categoryEng: `Flour`,
      categoryArb: `الطحين`,
    },
  ];
  return (
    <section
      className="max-w-[100vw] pb-[100px] relative bg-primary-offWhite primary-px 
      
    "
    >
      <div className="w-full h-full flex flex-col gap-6 items-center text-center">
        <h1 className="section-title mt-[5%]">{`${
          lang ? "What We Do" : "ماذا نفعل"
        }`}</h1>
        <h2 className="text-4xl font-semibold text-primary-green ">
          {`${
            lang
              ? `Providing Premium Agriculture Goods`
              : `نقدم منتجات زراعية عالية الجودة`
          }`}
        </h2>
        <p className="text-sm lg:text-lg text-gray-500 md:w-[400px] lg:w-[500px] font-semibold">
          {` ${
            lang
              ? `We aim to provide high-quality agricultural products that meet the
          needs of customers worldwide. This is achieved through innovation in
          production processes and sustainability in agricultural practices`
              : `نهدف إلى تقديم منتجات زراعية عالية الجودة تلبي احتياجات العملاء في جميع أنحاء العالم، وذلك من خلال الابتكار في عمليات الإنتاج والاستدامة في الممارسات الزراعية`
          }`}
        </p>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:h-[55%] xl:h-[500px] md:justify-around md:gap-4 lg:gap-12 lg:justify-between mt-[3%]">
          {cardContent.map((id) => {
            return (
              <Card
                key={id.categoryEng}
                text={lang ? id.textEng : id.textArb}
                img={id.img}
                svg={id.svg}
                category={lang?id.categoryEng:id.categoryArb}
                lang={lang}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
