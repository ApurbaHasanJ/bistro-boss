import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menus from "../../Shared/Menus/Menus";


const FromOurMenu = () => {
    const [menus, setMenus] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(menus => {
            const popularMenus = menus.filter(item => item.category === 'popular')
            setMenus(popularMenus)
        })
    },[])
    return (
        <section className="my-container mt-24">
        <SectionTitle subTitle={"---Check it out---"} title={"FROM OUR MENU"}/>
        <div className="grid grid-cols-2 gap-5">
            {
                menus.map(menu => <Menus key={menu._id}
                menu={menu}/>)
            }
        </div>
        </section>
    );
};

export default FromOurMenu;