const FoodCard = ({ menus }) => {
    const {name, image, price, recipe} = menus
  return (
    <div className="card lg:w-96 rounded-none bg-base-100 shadow-md">
      <img className="w-full relative"
          src={image}
          alt="Recipe"
        />
        <p className="absolute top-4 right-4 badge">${price}</p>
      <div className="card-body">
        <h2 className=" text-center font-semibold text-xl">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn-card px-5 py-3  text-lg font-medium  uppercase">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
