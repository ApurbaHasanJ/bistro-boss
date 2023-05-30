
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";

const FromOurMenu = () => {
  const [data] = useMenu();
  // popular menus
  const menus = data.filter((items) => items.category === "popular");

  return (
    <section className="my-container">
      <MenuCategory menus={menus} title={"FROM OUR MENU"} subTitle={"---Check it out---"}/>
    </section>
  );
};

export default FromOurMenu;
