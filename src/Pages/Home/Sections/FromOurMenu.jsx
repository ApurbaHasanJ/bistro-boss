
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";

const FromOurMenu = () => {
  const [data, loading] = useMenu();
  // popular menus
  const menus = data.filter((items) => items.category === "popular");
  // console.log(menus);

  return (
    <section className="my-container">
      <MenuCategory menus={menus} loading={loading} title={"FROM OUR MENU"} subTitle={"---Check it out---"}/>
    </section>
  );
};

export default FromOurMenu;
