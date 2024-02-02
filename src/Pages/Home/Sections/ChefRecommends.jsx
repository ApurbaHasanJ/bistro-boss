import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../Shared/FoosCard/FoodCard";
import Loader from "../../Shared/Loader/Loader";

const ChefRecommends = () => {
  const [data] = useMenu();
  // popular menus
  const menus = data
    .filter((items) => items.category === "popular")
    .slice(0, 3);
  // console.log(menus);

  return (
    <section className="my-container mt-24">
      <SectionTitle title={"CHEF RECOMMENDS"} subTitle={"---Should Try---"} />
      {menus ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mx-1">
          {menus.map((item) => (
            <FoodCard key={item._id} menu={item} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default ChefRecommends;
