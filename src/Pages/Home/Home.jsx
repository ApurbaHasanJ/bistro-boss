import Banners from "./Sections/Banners";
import CallUs from "./Sections/CallUs";
import ChefRecommends from "./Sections/ChefRecommends";
import FeaturedMenu from "./Sections/FeaturedMenu";
import FromOurMenu from "./Sections/FromOurMenu";
import OrderOnline from "./Sections/OrderOnline";
import SubBanner from "./Sections/SubBanner";
import Testimonials from "./Sections/Testimonials";

const Home = () => {
  return (
    <>
      <Banners />
      <OrderOnline />
      <SubBanner/>
      <FromOurMenu/>
      <CallUs/>
      <ChefRecommends/>
      <FeaturedMenu/>
      <Testimonials/>
    </>
  );
};

export default Home;
