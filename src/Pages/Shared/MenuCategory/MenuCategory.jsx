import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menus from "../../Shared/Menus/Menus";
import MenuBanner from "../MenuBanner/MenuBanner";

const MenuCategory = ({ menus, title, subTitle, img, menuTitle }) => {
  return (
    <section className="mt-24">
      {title ? <SectionTitle subTitle={subTitle} title={title} /> : (
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
    </section>
  );
};

export default MenuCategory;
