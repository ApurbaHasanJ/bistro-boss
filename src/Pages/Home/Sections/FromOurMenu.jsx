import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";

const FromOurMenu = () => {
  const [data] = useMenu();
  // popular menus
  const menus = data.filter((items) => items.category === "popular");

  return (
    <section className="my-container mt-24">
      <SectionTitle subTitle={"---Check it out---"} title={"FROM OUR MENU"} />
      <MenuCategory menus={menus}/>
    </section>
  );
};

export default FromOurMenu;
