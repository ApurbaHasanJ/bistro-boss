import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
// import { A11y, Pagination, Scrollbar } from "swiper";
const Banners = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/banners")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBanners(data);
      });
  }, []);
  return (
    <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        
        modules={[Autoplay,  Pagination]}
        className="mySwiper">
        {banners.map((banner) => (
          <SwiperSlide
            key={banner._id}
            className="">
            <img
              className="  bg-center w-full min-h-full  lg:h-screen"
              src={banner.img}
              alt={`Banner ${banner.id}`}
            />
          </SwiperSlide>
        ))}

        
      </Swiper>
  );
};

export default Banners;
