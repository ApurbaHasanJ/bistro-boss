import { Swiper, SwiperSlide } from "swiper/react";
import "./OrderOnline.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";

const OrderOnline = () => {
  const [ordersOnline, setOrdersOnline] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders-online")
      .then((res) => res.json())
      .then((data) => {
        setOrdersOnline(data);
      });
  }, []);

  return (
    <>
      <section className="my-container  mt-24">
        <SectionTitle
          subTitle={"---From 11:00am to 10:00pm---"}
          title={"ORDER ONLINE"}
        />
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            // disableOnInteraction: ,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          className="overflow-hidden"
          modules={[FreeMode, Pagination, Autoplay]}>
          <div className="mySwiper my-container mt-11 ">
            {ordersOnline.map((orderOnline) => (
              <SwiperSlide key={orderOnline._id} className="drop-shadow-2xl">
                <img
                  className="h-full"
                  src={orderOnline.image}
                  alt={orderOnline.title}
                />
                <h4 className="md:text-3xl uppercase text-center text-white -mt-[76px]   pb-10 ">
                  {orderOnline.title}
                </h4>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default OrderOnline;
