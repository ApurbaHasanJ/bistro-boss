import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { MdRocketLaunch } from "react-icons/md";
import StarRatings from "react-star-ratings";

const AddReview = () => {
  const [rating, setRating] = useState(0);
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
      <SectionTitle
        title={"GIVE A REVIEW..."}
        subTitle={"---Sharing is Caring!!!---"}
      />

      <div className="py-20 md:mx-28 mx-12">
        <div
          className="my-container shadow-xl"
          style={{
            backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
          }}>
          {/* Rating */}
          <div className="mt-5 grid gap-4 justify-center items-center">
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
          </div>
          <div className="   my-7 mt-0 lg:my-16 items-center">
            <div className=" px-10 mx-3 lg:mx-0 rounded-lg">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* recipe name */}
                <div className="form-control ">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">
                      Which recipe you liked most?
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    type="text"
                    name="recipeName"
                    {...register("recipeName")}
                    required
                    placeholder="Recipe you liked most"
                    className="input py-7 hover:shadow-md "
                  />
                </div>

                {/* recipe price */}
                <div className="form-control mb-3">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">
                      Do you have any suggestion for us?
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <input
                    id="price"
                    name="price"
                    {...register("suggestion")}
                    className="input py-7 hover:shadow-md "
                    required
                    placeholder="Suggestion"
                  />
                </div>

                {/* Recipe details */}
                <div className="form-control mb-3">
                  <label className="label justify-start text-base font-medium text-slate-900 ">
                    <span className="label-text">
                      Kindly express your care in a short way.
                    </span>
                    <span className="text-red-600 text-xl">*</span>
                  </label>
                  <textarea
                    name="recipe details"
                    {...register("recipeDetails")}
                    required
                    placeholder="Review in detail..."
                    className="textarea py-3 hover:shadow-md "
                    rows="8"
                  />
                </div>

                <div
                  onSubmit={handleSubmit}
                  className="flex justify-start mt-7 ">
                  <button
                    type="submit"
                    {...register("submit")}
                    // disabled={disabled}
                    className="  border-none bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 p-4 px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
                    <span className="text-xl font-semibold">Send Review</span>
                    <MdRocketLaunch className=" text-2xl md:mx-0 mx-auto" />
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

export default AddReview;
