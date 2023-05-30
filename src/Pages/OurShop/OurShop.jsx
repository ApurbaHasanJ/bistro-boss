import { Helmet } from "react-helmet-async";
import PageBanner from "../Shared/PageBanner/PageBanner";
import { Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import RecipesTab from "./RecipesTab";
import { NavLink, useParams } from "react-router-dom";

const OurShop = () => {
  // tab path
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  // load dynamic tab path
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);
  console.log(category);

  // set tab index
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [data] = useMenu();

  const drinks = data.filter((items) => items.category === "drinks");
  const desserts = data.filter((items) => items.category === "dessert");
  const pizzas = data.filter((items) => items.category === "pizza");
  const salads = data.filter((items) => items.category === "salad");
  const soups = data.filter((items) => items.category === "soup");

  console.log(data, salads);
  return (
    <>
      <Helmet>
        <title>Shop | Bistro Boss</title>
      </Helmet>

      {/* banner */}
      <PageBanner
        img={"https://i.postimg.cc/2SJ9r5x1/banner2.jpg"}
        title={"OUR SHOP"}
        description={"WOULD YOU LIKE TO TRY A DISH?"}
      />

      {/* body */}
      <div className="my-container mt-28">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center items-center gap-7 text-lg text-24">
      
        <NavLink to='/shop/salad'
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[#BB8506] text-[#BB8506] py-2 font-medium" : "text-[#151515]"
          }
        >
          SALADS
        </NavLink>
      
      
        <NavLink to='/shop/pizza'
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[#BB8506] text-[#BB8506] py-2 font-medium" : "text-[#151515]"
          }
        >
          PIZZAS
        </NavLink>
      
      
        <NavLink to='/shop/soup'
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[#BB8506] text-[#BB8506] py-2 font-medium" : "text-[#151515]"
          }
        >
          SOUPS
        </NavLink>
      
      
        <NavLink to='/shop/deserts'
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[#BB8506] text-[#BB8506] py-2 font-medium" : "text-[#151515]"
          }
        >
          DESSERTS
        </NavLink>
      
      
        <NavLink to='/shop/drinks'
          className={({ isActive }) =>
            isActive ? "border-b-2 border-[#BB8506] text-[#BB8506] py-2 font-medium" : "text-[#151515] border-node"
          }
        >
          DRINKS
        </NavLink>
      
    </TabList>

          <TabPanel className="mt-10 ">
            <RecipesTab menus={salads} />
          </TabPanel>
          <TabPanel className="mt-10 ">
            <RecipesTab menus={pizzas} />
          </TabPanel>
          <TabPanel className="mt-10 ">
            <RecipesTab menus={soups} />
          </TabPanel>
          <TabPanel className="mt-10 ">
            <RecipesTab menus={desserts} />
          </TabPanel>
          <TabPanel className="mt-10 ">
            <RecipesTab menus={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default OurShop;
