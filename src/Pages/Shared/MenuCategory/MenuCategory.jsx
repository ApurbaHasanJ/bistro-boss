import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menus from "../../Shared/Menus/Menus";
import MenuBanner from "../MenuBanner/MenuBanner";

const MenuCategory = ({ menus, title, subTitle, img, menuTitle }) => {
  // console.log(title);
  return (
    <section className="mt-28">
      {title ? (
        <SectionTitle subTitle={subTitle} title={title} />
      ) : (
        <MenuBanner
          img={img}
          title={menuTitle}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      )}

      <div className="grid grid-cols-2 gap-5 my-container mt-11 ">
        {menus.map((menu) => (
          <Menus key={menu._id} menu={menu} />
        ))}
      </div>
      <Link to={`/shop/${menuTitle}`} className="flex justify-center">
        <button className="btn-dark mt-5 px-5 py-3 font-medium text-lg">
          ORDER YOUR FAVORITE FOOD
        </button>
      </Link>
    </section>
  );
};

export default MenuCategory;
