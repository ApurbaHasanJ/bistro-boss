import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateItem = ({ item, setUpdating, refetch }) => {
  console.log(item);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //  remove string from price
    const recipePrice = parseInt(data.price);
    const menu = {
      name: data.name,
      category: data.category,
      price: recipePrice,
      recipe: data.recipe,
      image: item.image,
    };
    // console.log(menu);

    axios
      .patch(`http://localhost:5000/menus/admin/${item?._id}`, menu)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Menu deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setUpdating(false);
        }
      });
  };
  return (
    <div className="w-full">
      <SectionTitle title={"UPDATE ITEM"} subTitle={"---Wanna Change?---"} />

      <div
        className="shadow-xl w-full relative mt-10 md:py-20 py-10 md:my-container px-4 rounded-lg"
        style={{
          backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
        }}>
        <RxCross2
          onClick={() => setUpdating(false)}
          className="absolute -right-2 -top-2 bg-gray-200 rounded-lg hover:text-red-600 p-[2px] text-2xl md:text-3xl duration-500"
        />
        <div className="   my-7 mt-0 lg:my-16 items-center">
          {/* Login Img */}

          <div className=" px-10 mx-3 lg:mx-0 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* recipe name */}
              <div className="form-control ">
                <label className="label justify-start text-base font-medium text-slate-900 ">
                  <span className="label-text">Recipe Name</span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <input
                  type="text"
                  name="recipeName"
                  {...register("name")}
                  required
                  placeholder="Recipe name"
                  defaultValue={item?.name}
                  className="input hover:shadow-md "
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {/* Category */}
                <div className="form-control ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Category</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <select
                    className="p-3 rounded-lg"
                    {...register("category")}
                    defaultValue={item?.category}
                    required>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </div>
                {/* recipe price */}
                <div className="form-control mb-3">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Price</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="number"
                    min={0}
                    id="price"
                    name="price"
                    {...register("price")}
                    defaultValue={item?.price}
                    className="input hover:shadow-md "
                    required
                    placeholder="Price"
                  />
                </div>
              </div>
              {/* Recipe details */}
              <div className="form-control mb-3">
                <label className="label justify-start text-base font-medium text-slate-900 ">
                  <span className="label-text">Recipe Details</span>
                  <span className="text-red-600 text-xl">*</span>
                </label>
                <textarea
                  name="recipe details"
                  {...register("recipeDetails")}
                  defaultValue={item?.recipe}
                  required
                  placeholder="Your recipe details"
                  className="textarea hover:shadow-md "
                  rows="8"
                />
              </div>

              <div
                onSubmit={handleSubmit}
                className="flex justify-center mt-7 ">
                <button
                  type="submit"
                  {...register("submit")}
                  // disabled={disabled}
                  className="  border-none bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 md:p-4 p-2 px-3 md:px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
                  <span className="md:text-xl md:font-semibold">
                    Update Recipe
                  </span>
                  <ImSpoonKnife
                    className=" md:text-2xl text-lg md:mx-0 mx-auto"
                    title="ADD ITEMS"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
