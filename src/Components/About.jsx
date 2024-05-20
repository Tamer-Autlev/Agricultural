import wheatField from '../assets/cta-1-bg-1.jpg'
import farm from '../assets/farm.png'
import tractor from '../assets/project-2-1.jpg'
const About = ({lang}) => {

    return (
      <section className="primary-px lg:h-[100svh] max-w-[100vw] overflow-hidden relative before:absolute before:bg-white-papper before:w-full before:h-[16px] before:left-0 before:top-0 before:z-50 ">
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-4 mt-[3%] lg:mt-[10%] z-20 relative">
          <div className="relative lg:ml-[100px] lg:w-[50%] h-full rounded-lg order-2">
            <img
              src={wheatField}
              className="w-full h-[350px] lg:h-[700px] rounded-lg object-cover"
            />
            <img
              src={tractor}
              className="hidden md:inline absolute p-1 bg-white rounded-lg w-[100%] md:w-[200px] h-[250px] xl:w-[25vw] lg:w-[30vw] lg:h-[40vh] bottom-[10%] z-30 left-[-15%] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 bg-white lg:ml-[-100px] z-20 rounded-lg lg:mt-[100px] pt-[100px] px-[10%] md:pl-[10%] md:px-0 lg:w-[50%] w-[100vw] flex flex-col items-start justify-start h-full ">
            {lang ? (
              <h1 className="section-title self-center lg:self-start ">
                Welcome HARVEST-GP
              </h1>
            ) : (
              <h1
                className={`rtl section-title self-center ${
                  lang ? "lg:self-center" : "lg:self-end"
                } `}
              >
                مرحبا بكم في HARVEST-GP
              </h1>
            )}
            {lang ? (
              <h2 className="text-3xl text-center md:text-left md:text-5xl font-mono font-bold mt-6 text-primary-green w-full">
                Leading the Way in Agricultural Export and Production
              </h2>
            ) : (
              <h2
                className={`text-3xl text-center ${
                  lang ? "md:text-start" : "md:text-end"
                } md:text-5xl font-mono font-bold mt-6 text-primary-green w-full`}
              >
                رائدة في مجال تصدير الغلال والانتاج الزراعي
              </h2>
            )}
            {lang ? (
              <p className="text-lg font-Roboto text-center md:text-left leading-9 mt-6 text-gray-500 z-[999990]">
                <span className="font-bold">Harvest-gp</span> is a leading group
                of companies in the field of exporting agricultural grains and
                producing sunflower oil and wheat flour. The company
                distinguishes itself by its strong commitment to product
                quality, social responsibility, and environmental
                responsibility.
              </p>
            ) : (
              <p className="text-lg font-Roboto text-center md:text-right  leading-9 mt-6 text-gray-500 z-[999990] rtl">
                <span className="font-bold text-right">Harvest-gp</span> هي
                مجموعة شركات رائدة في مجال تصدير الغلال الزراعية وإنتاج زيت عباد
                الشمس طحين القمح . تتميز الشركة بالتزامها الراسخ بجودة المنتجات
                والمسؤولية الاجتماعية والبيئية
              </p>
            )}
            <img
              src={farm}
              className="hidden lg:inline absolute w-[60%] bottom-[8%] right-[-15%] z-30"
            />
          </div>
        </div>
      </section>
    );
}

export default About