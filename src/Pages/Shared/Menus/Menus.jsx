

const Menus = ({menu}) => {
    const {image, price, recipe, name} = menu
    return (
        <div className="sm:flex grid gap-4 space-x-5">
            <img className="w-[118px] h-[104px]    rounded-r-full rounded-b-full" src={image} alt="" />
            <div>
                <h3 className="text-lg">{name}--------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-lg">${price}</p>
        </div>
    );
};

export default Menus;