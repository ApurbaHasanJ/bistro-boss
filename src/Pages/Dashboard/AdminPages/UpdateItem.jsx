import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const UpdateItem = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-12 ">
      <SectionTitle title={"UPDATE ITEM"} subTitle={"---Wanna Change?---"} />

      <div className="py-20 my-container">
        <div
          className="my-container shadow-xl"
          style={{
            backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
          }}>
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
                      {...register("category")}
                      className="input hover:shadow-md "
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
                      id="price"
                      name="price"
                      {...register("price")}
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
                    className="  border-none bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 p-4 px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
                    <span className="text-xl font-semibold">Update Recipe</span>
                    <ImSpoonKnife
                      className=" text-2xl md:mx-0 mx-auto"
                      title="ADD ITEMS"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
