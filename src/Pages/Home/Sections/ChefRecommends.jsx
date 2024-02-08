import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../Shared/FoosCard/FoodCard";
import Loader from "../../Shared/Loader/Loader";

const ChefRecommends = () => {
  const [menus] = useMenu();
  // popular menus
  const data = menus
    .filter((items) => items.category === "popular")
    .slice(0, 3);
  // console.log(menus);

  return (
    <section className="my-container mt-24">
      <SectionTitle title={"CHEF RECOMMENDS"} subTitle={"---Should Try---"} />
      {data ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mx-1">
          {data.map((item) => (
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
