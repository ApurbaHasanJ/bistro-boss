import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";
import "swiper/css/navigation";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#CD9003",
    inactiveFillColor: "#A1A1A1",
  };

  return (
    <section className="mt-24 my-container">
      <SectionTitle
        subTitle={"---What Our Clients Say---"}
        title={"TESTIMONIALS"}
      />

      <>
        <Swiper
           navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2500,
            // disableOnInteraction: ,
          }}
          //  navigation={}
          modules={[Navigation, Autoplay,FreeMode, Pagination]}
          className="mySwiper ">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="my-container  flex justify-center items-center flex-col">
                <Rating
                  className="mb-11 md:mt-0 mt-5"
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                  itemStyles={myStyles}
                />
                <FontAwesomeIcon
                  className="mb-9 md:text-7xl sm:text-5xl text-3xl"
                  icon={faQuoteLeft}
                />
                <p className="w-full text-center">{review?.details}</p>
                <h3 className="text-2xl text-[#CD9003] uppercase mt-2">
                  {review?.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </section>
  );
};

export default Testimonials;
