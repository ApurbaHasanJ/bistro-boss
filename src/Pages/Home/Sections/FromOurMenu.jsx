import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";

const FromOurMenu = () => {
  const [menus, loading] = useMenu();
  // popular menus
  const data = menus.filter((items) => items.category === "popular");
  // console.log(menus);

  return (
    <section className="my-container">
      <MenuCategory
        menus={data}
        loading={loading}
        title={"FROM OUR MENU"}
        subTitle={"---Check it out---"}
      />
    </section>
  );
};

export default FromOurMenu;
