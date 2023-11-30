import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import useBanner from "../../../hooks/useBanner";
// import { A11y, Pagination, Scrollbar } from "swiper";



const Banners = () => {
  const [banners, BannersLoading]= useBanner()
  console.log(BannersLoading);

  return (
    <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
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
