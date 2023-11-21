import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../Shared/FoosCard/FoodCard";

const ChefRecommends = () => {
  const [data] = useMenu();
  // popular menus
  const menus = data.filter((items) => items.category === "popular").slice(0, 3);
  console.log(menus);

  return (
    <section className="my-container mt-24">
      <SectionTitle title={"CHEF RECOMMENDS"} subTitle={"---Should Try---"} />
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mx-1">
        {menus.map((item) => (
          <FoodCard key={item._id} menus={item} />
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
