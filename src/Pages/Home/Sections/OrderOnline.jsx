import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OrderOnline = () => {
  return (
    <>
      <section className="my-container mt-24">
        <SectionTitle 
        subTitle={"---From 11:00am to 10:00pm---"} title={"ORDER ONLINE"}/>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="drop-shadow-2xl">
            <img src="https://i.postimg.cc/vZ7ffJDY/slide1.jpg" alt="" />
            <h4 className="text-3xl uppercase text-center text-white -mt-16 pb-10 ">
              Salads
            </h4>
          </SwiperSlide>
          <SwiperSlide className="drop-shadow-2xl">
            <img src="https://i.postimg.cc/1RgWwzSy/slide2.jpg" alt="" />
            <h4 className="text-3xl uppercase text-center text-white -mt-16 pb-10 ">
              Soups
            </h4>
          </SwiperSlide>
          <SwiperSlide className="drop-shadow-2xl">
            <img src="https://i.postimg.cc/28h29X3J/slide3.jpg" alt="" />
            <h4 className="text-3xl uppercase text-center text-white -mt-16 pb-10 ">
              Pizzas
            </h4>
          </SwiperSlide>
          <SwiperSlide className="drop-shadow-2xl">
            <img src="https://i.postimg.cc/RZmGkQH0/slide4.jpg" alt="" />
            <h4 className="text-3xl uppercase text-center text-white -mt-16 pb-10 ">
              Desserts
            </h4>
          </SwiperSlide>
          <SwiperSlide className="drop-shadow-2xl">
            <img src="https://i.postimg.cc/vZ7ffJDY/slide1.jpg" alt="" />
            <h4 className="text-3xl uppercase text-center text-white -mt-16 pb-10 ">
              Salads
            </h4>
          </SwiperSlide>
          <SwiperSlide className="drop-shadow-2xl">
            <img src="https://i.postimg.cc/1RgWwzSy/slide2.jpg" alt="" />
            <h4 className="text-3xl uppercase text-center text-white -mt-16 pb-10 ">
              Soups
            </h4>
          </SwiperSlide>
          <SwiperSlide className="drop-shadow-2xl">
            <img src="https://i.postimg.cc/28h29X3J/slide3.jpg" alt="" />
            <h4 className="text-3xl uppercase text-center text-white -mt-16 pb-10 ">
              Pizzas
            </h4>
          </SwiperSlide>
          <SwiperSlide className="drop-shadow-2xl">
            <img src="https://i.postimg.cc/RZmGkQH0/slide4.jpg" alt="" />
            <h4 className="text-3xl uppercase text-center text-white -mt-16 pb-10 ">
              Desserts
            </h4>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default OrderOnline;
