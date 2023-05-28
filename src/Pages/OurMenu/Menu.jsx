import { Helmet } from "react-helmet-async";
import PageBanner from "../Shared/PageBanner/PageBanner";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";

const Menu = () => {
  const [data] = useMenu();
  const offered = data.filter((items) => items.category === "offered");
  const desserts = data.filter((items) => items.category === "dessert");
  const pizzas = data.filter((items) => items.category === "pizza");
  const Salads = data.filter((items) => items.category === "salad");
  const Soups = data.filter((items) => items.category === "soup");

  return (
    <>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <PageBanner
        img={"https://i.postimg.cc/rF3hJP3B/banner3.jpg"}
        title={"OUR MENU"}
        description={"WOULD YOU LIKE TO TRY A DISH?"}
      />
      <body className="mt-24">

        {/* offered menu */}
        <MenuCategory
          menus={offered}
          subTitle={"---Don't miss---"}
          title={"TODAY'S OFFER"}
        />

        {/* Desserts menu */}
        <MenuCategory menus={desserts} menuTitle={"DESSERTS"} img={"https://i.postimg.cc/Dy8j1TjQ/dessert-bg.jpg"}/>

        {/* Pizzas Menu */}
        <MenuCategory menus={pizzas} menuTitle={"PIZZA"} img={"https://i.postimg.cc/GtpM7wcC/pizza-bg.jpg"}/>

        {/* Salads Menu */}
        <MenuCategory menus={Salads} menuTitle={"SALADS"} img={"https://i.postimg.cc/VvHK2G6b/salad-bg.jpg"}/>

        {/* Soups Menu */}
        <MenuCategory menus={Soups} menuTitle={"SOUPS"} img={"https://i.postimg.cc/v8P21BzH/soup-bg.jpg"}/>
      </body>
    </>
  );
};

export default Menu;
