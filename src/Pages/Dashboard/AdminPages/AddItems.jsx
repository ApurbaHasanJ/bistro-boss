import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import Swal from "sweetalert2";
import { useState } from "react";
import { UploadPhotos } from "../../Shared/Cloudinary/UploadPhotos";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddItems = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    const { name, category, price, photos, recipeDetails } = data;

    //  remove string from price
    const recipePrice = parseInt(price);

    // cloudinary photo upload
    const itemImage = await UploadPhotos(photos[0]);

    const menuData = {
      name,
      recipe: recipeDetails,
      image: itemImage.img,
      category,
      price: recipePrice,
    };
    // console.log(itemImage);
    // console.log(menuData);

    // post item data if the photo post post successfully
    if (itemImage.img) {
      axiosSecure
        .post("https://bistro-boss-server-cyan-nu.vercel.app/menus/admin", menuData)
        .then((response) => {
          if (response.data.insertedId) {
            setLoading(false);
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Menu Updated Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: error.message, // Assuming error.message contains the error message
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  return (
    <section className="min-h-screen  mt-12">
      <SectionTitle title={"ADD AN ITEM"} subTitle={"---What's new?---"} />

      <div className="md:my-9 my-container my-6">
        {loading ? (
          <div className="mx-5">
            <div className="flex justify-center items-center border md:p-32 p-16 shadow-2xl shadow-[#d19f54a8] rounded-xl drop-shadow-2xl max-w-3xl mx-auto mt-40">
              <p className="text-3xl font-thin">Upl</p>
              <div className="w-[18px] h-[18px] border-[4px] border-dashed rounded-full animate-spin mt-2 border-[#D1A054]"></div>
              <p className="text-3xl font-thin">
                ading<span className="text-[#D1A054]">....</span>
              </p>
            </div>
          </div>
        ) : (
          <div
            className=" shadow-xl p-3 py-5  rounded-lg"
            style={{
              backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
            }}>
            <div className="   my-7 mt-0 lg:my-10 ">
              {/* Login Img */}
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
                      type="number"
                      id="price"
                      min={0}
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
                {/* Recipe photo */}
                <div className="form-control mb-3">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">Upload Item Image</span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    className="  file-input hover:shadow-md w-full max-w-xs"
                    type="file"
                    {...register("photos", { required: true })}
                  />
                </div>

                <div className="flex justify-center mt-7 ">
                  <button
                    type="submit"
                    value="submit"
                    {...register("submit")}
                    // disabled={disabled}
                    className="  border-none bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 md:p-4 p-2 px-3 md:px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
                    <span className="md:text-xl font-semibold">Add Item</span>
                    <ImSpoonKnife
                      className=" md:text-2xl text-xl md:mx-0 mx-auto"
                      title="ADD ITEMS"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddItems;
