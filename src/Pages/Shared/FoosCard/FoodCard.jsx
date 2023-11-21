const FoodCard = ({ menus }) => {
    const {name, image, price, recipe} = menus
  return (
    <div className="card  mx-auto mt-10 rounded-none rounded-t-md bg-base-100 shadow-md">
      <img className="w-full relative rounded-t-xl"
          src={image}
          alt="Recipe"
        />
        <p className="absolute top-4 right-4 badge">${price}</p>
      <div className="card-body bg-slate-100">
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
