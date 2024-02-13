import { useEffect } from "react";
import Banners from "./Sections/Banners";
import CallUs from "./Sections/CallUs";
import ChefRecommends from "./Sections/ChefRecommends";
import FeaturedMenu from "./Sections/FeaturedMenu";
import FromOurMenu from "./Sections/FromOurMenu";
import OrderOnline from "./Sections/OrderOnline";
import SubBanner from "./Sections/SubBanner";
import Testimonials from "./Sections/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Bistro Boss</title>
      </Helmet>
      <Banners />
      <OrderOnline />
      <SubBanner />
      <FromOurMenu />
      <CallUs />
      <ChefRecommends />
      <FeaturedMenu />
      <Testimonials />
    </>
  );
};

export default Home;
