import rollWheat from '../assets/project-2-4.jpg'
import sunFlower from '../assets/service-1-2.jpg'
import tracktor from '../assets/service-1-3.jpg'
const ProductSeciton = () => {
  return (
    <section className="max-w-[100vw] bg-primary-yellow ">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center primary-px md:justify-between gap-[50px] relative lg:h-[30vh] before:bg-yellow-papper before:rotate-180 before:bg-auto before:bg-center before:absolute before:z-30 before:w-full before:left-0 before:h-3 before:bottom-[100%]  ">
        <div className="Product-box group ">
          <img src={rollWheat} className="Product-boxImg" />
          <div className="ProductBox-textContainer">
            <p className="ProductBox-text">Agriculture Leader</p>
          </div>
        </div>
        <div className="Product-box group">
          <img src={sunFlower} className="Product-boxImg" />
          <div className="ProductBox-textContainer">
            <p className="ProductBox-text">High Quality</p>
          </div>
        </div>
        <div className="Product-box group ">
          <img
            src="https://s7d1.scene7.com/is/image/wbcollab/glebzter_shutterstock_2288709551_hero?qlt=90&fmt=webp&resMode=sharp2"
            className="Product-boxImg"
          />
          <div className="ProductBox-textContainer">
            <p className="ProductBox-text">Over Sea</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSeciton