import { useContext, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { MdRocketLaunch } from "react-icons/md";
import StarRatings from "react-star-ratings";
import toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { recipeDetails, recipeName, suggestion } = data;

    if (rating === 0) {
      toast.error("Please rate us first.");
      return;
    }
    const review = {
      rating,
      recipeDetails,
      recipeName,
      suggestion,
      user: user?.email || "anonymous",
    };

    axios.post("http://localhost:5000/reviews", {review}).then((res) => {
      if (res.data.insertedId) {
        setRating(0);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Menu Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    console.log(data);
  };
  return (
    <div className="md:mt-12 mt-4 my-container">
      <SectionTitle
        title={"GIVE A REVIEW..."}
        subTitle={"---Sharing is Caring!!!---"}
      />

      <div className="pb-20 md:pt-16 pt-10">
        <div
          className=" shadow-xl rounded-lg"
          style={{
            backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
          }}>
          {/* Rating */}
          <div className="pt-6 grid gap-4 justify-center items-center">
            <h2 className="md:text-3xl text-2xl text-center font-semibold font-[Cinzel] whitespace-nowrap">
              Rate Us!
            </h2>
            {/* stars */}
            <StarRatings
              rating={rating}
              changeRating={(newRating) => setRating(newRating)}
              starRatedColor="gold"
              required
              totalStars={5}
              starDimension={"40px"}
              starSpacing={"4px"}
            />
            {rating === 0 && (
              <p className="text-red-500 text-center">
                Please rate us from here.
              </p>
            )}
          </div>
          <div className=" my-7 mt-0 lg:my-16 items-center">
            <div className=" md:px-10 sm:px-3 px-0 mx-3 sm:mx-0 rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* recipe name */}
                <div className="form-control">
                  <label className="label justify-start text-base font-medium text-slate-900">
                    <span className="label-text">
                      Which recipe you liked most?
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="recipeName"
                    {...register("recipeName", {
                      required: "Recipe name is required",
                    })}
                    placeholder="Recipe you liked most"
                    className={`input md:py-7 hover:shadow-md ${
                      errors.recipeName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.recipeName && (
                    <p className="text-red-600">{errors.recipeName.message}</p>
                  )}
                </div>

                {/* recipe price */}
                <div className="form-control mb-3">
                  <label className="label justify-start text-base font-medium text-slate-900">
                    <span className="label-text">
                      Do you have any suggestion for us?
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    id="price"
                    name="price"
                    {...register("suggestion", {
                      required: "Suggestion is required",
                    })}
                    className={`input md:py-7 hover:shadow-md ${
                      errors.suggestion ? "border-red-500" : ""
                    }`}
                    placeholder="Suggestion"
                  />
                  {errors.suggestion && (
                    <p className="text-red-600">{errors.suggestion.message}</p>
                  )}
                </div>

                {/* Recipe details */}
                <div className="form-control mb-3">
                  <label className="label justify-start text-base font-medium text-slate-900">
                    <span className="label-text">
                      Kindly express your care in a short way.
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <textarea
                    name="recipe details"
                    {...register("recipeDetails", {
                      required: "Recipe details are required",
                    })}
                    className={`textarea py-3 hover:shadow-md ${
                      errors.recipeDetails ? "border-red-500" : ""
                    }`}
                    placeholder="Review in detail..."
                    rows="8"
                  />
                  {errors.recipeDetails && (
                    <p className="text-red-600">
                      {errors.recipeDetails.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-start mt-7">
                  <button
                    type="submit"
                    {...register("submit")}
                    className="border-none  bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 md:p-4 p-2 px-3 md:px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
                    <span className="md:text-xl font-semibold">Send Review</span>
                    <MdRocketLaunch className="md:text-2xl text-xl md:mx-0 mx-auto" />
                  </button>
                </div>
              </form>
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
