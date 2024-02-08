import { useState } from "react";
import { Helmet } from "react-helmet-async";
import PageBanner from "../Shared/PageBanner/PageBanner";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import RecipesTab from "./RecipesTab";
import { useLocation } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";

const OurShop = () => {
  const [menus, loading] = useMenu();
  const location = useLocation();
  let menuTitle = ""; // Initialize menuTitle

  if (location.state && location.state.from) {
    menuTitle = location.state.from;
  }

  // Now, you can use the menuTitle in your component
  console.log(menuTitle);

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  // Set the default category
  const [selectedCategory, setSelectedCategory] = useState(
    menuTitle || categories[0]
  );

  const categoryMenus = {
    salad: menus.filter((items) => items.category === "salad"),
    pizza: menus.filter((items) => items.category === "pizza"),
    soup: menus.filter((items) => items.category === "soup"),
    dessert: menus.filter((items) => items.category === "dessert"),
    drinks: menus.filter((items) => items.category === "drinks"),
  };

  return (
    <>
      <Helmet>
        <title>Shop | Bistro Boss</title>
      </Helmet>

      {/* banner */}
      <PageBanner
        img={"https://i.postimg.cc/2SJ9r5x1/banner2.jpg"}
        title={"OUR SHOP"}
        description={`WOULD YOU LIKE TO TRY A ${selectedCategory.toUpperCase()}?`}
      />

      {/* body */}
      <div className="my-container mt-28">
        <Tabs
          selectedTabClassName=" uppercase border-b-4 border-[#BB8506] text-[#BB8506] py-2 font-medium"
          selectedIndex={categories.indexOf(selectedCategory)}
          onSelect={(index) => setSelectedCategory(categories[index])}>
          <TabList className="grid grid-cols-5 md:w-9/12 justify-center  mx-auto  items-center  md:gap-7 gap-2 text-lg text-24">
            {categories.map((category) => (
              <Tab key={category}>
                <div className="uppercase border-b-4 border-[#BB8506]">
                  {category}
                </div>
              </Tab>
            ))}
          </TabList>

          {loading ? (
            <Loader />
          ) : (
            <>
              {categories.map((category, index) => (
                <TabPanel key={index}>
                  <RecipesTab menus={categoryMenus[category]} />
                </TabPanel>
              ))}
            </>
          )}
        </Tabs>
      </div>
    </>
  );
};

export default OurShop;
