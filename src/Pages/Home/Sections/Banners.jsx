import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banners = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} stopOnHover	={true} transitionTime={1.5}>
      <div>
        <img src="https://i.postimg.cc/vTJMYSdk/01.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/ZRY52gTL/02.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/HnH4qTrh/03.png" />
      </div>
      <div>
        <img src="https://i.postimg.cc/BQBwQVsF/04.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/QNW2smHg/05.png" />
      </div>
      <div>
        <img src="https://i.postimg.cc/z3ZpXT20/06.png" />
      </div>
    </Carousel>
  );
};

export default Banners;
