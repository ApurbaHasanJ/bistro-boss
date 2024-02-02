import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menus from "../../Shared/Menus/Menus";
import MenuBanner from "../MenuBanner/MenuBanner";
import Loader from "../Loader/Loader";

const MenuCategory = ({ menus, title, subTitle, img, menuTitle, loading }) => {
  // console.log(menuTitle);
  const navigate = useNavigate();

  const handleFoodOrder = (menuTitle) => {
    navigate("/shop", {
      state: {
        from: menuTitle,
      },
    });
    console.log(menuTitle);
  };

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

      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 gap-5 my-container mt-11 ">
          {menus.map((menu) => (
            <Menus key={menu._id} menu={menu} />
          ))}
        </div>
      )}
      <div
        className="flex justify-center"
        onClick={() => {
          handleFoodOrder(menuTitle);
        }}>
        <button className="btn-dark mt-5 px-5 py-3 font-medium text-lg">
          ORDER YOUR FAVORITE FOOD
        </button>
      </div>
    </section>
  );
};

export default MenuCategory;
