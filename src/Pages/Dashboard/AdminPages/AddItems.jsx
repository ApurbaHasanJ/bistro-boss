import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="min-h-screen my-container mt-8">
      <SectionTitle title={"ADD AN ITEM"} subTitle={"---What's new?---"} />

      <div className="py-20 md:mx-28 mx-12">
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
                    {...register("recipe details")}
                    required
                    placeholder="Your recipe details"
                    className="textarea hover:shadow-md "
                    rows="8"
                  />
                </div>
                {/* Recipe photo */}
                <div className="form-control mb-3">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Upload Item Image</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    className="  hover:shadow-md "
                    type="file"
                    {...register("photos", { required: true })}
                  />
                  {errors.photos && <span>Please Upload a Photo.</span>}
                </div>

                <div
                  onSubmit={handleSubmit}
                  className="flex justify-start mt-7 ">
                  <button
                    type="submit"
                    {...register("submit")}
                    // disabled={disabled}
                    className="  border-none bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 p-4 px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
                    <span className="text-xl font-semibold">Add Item</span>
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
    </section>
  );
};

export default AddItems;
