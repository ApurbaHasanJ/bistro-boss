import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";
import OurLocation from "../../ContactUs/Sections/OurLocation";

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="my-container min-h-screen mt-8">
      {/* booking section */}
      <section>
        <SectionTitle subTitle={"---Reservation---"} title={"BOOK A TABLE"} />
        <div className="">
          <div className="  mt-20">
            <div
              className="my-container shadow-xl"
              style={{
                backgroundImage: `url('https://i.postimg.cc/tg8rPHSH/authentication.png')`,
              }}>
              <div className="   my-7 mt-0 lg:my-16 items-center">
                <div className=" px-10 mx-3 lg:mx-0 rounded-lg">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                      {/* recipe date */}
                      <div className="form-control ">
                        <label className="label justify-start text-base font-medium text-slate-900 ">
                          <span className="label-text">Date</span>
                          <span className="text-red-600 text-xl">*</span>
                        </label>
                        <input
                          type="date"
                          name="date"
                          {...register("date")}
                          required
                          className="input py-7 hover:shadow-md "
                        />
                      </div>

                      {/* recipe time */}
                      <div className="form-control mb-3">
                        <label className="label justify-start text-base font-medium text-slate-900 ">
                          <span className="label-text">Time</span>
                          <span className="text-red-600 text-xl">*</span>
                        </label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          {...register("time")}
                          className="input py-7 hover:shadow-md "
                          required
                        />
                      </div>

                      {/* Guests */}
                      <div className="form-control">
                        <label className="label justify-start text-base font-medium text-slate-900">
                          <span className="label-text">Guests</span>
                          <span className="text-red-600 text-xl">*</span>
                        </label>

                        <input
                          type="number"
                          placeholder="Enter Number of Guests"
                          className="input py-7 hover:shadow-md"
                          min="1"
                          {...register("guests", { required: true })}
                        />
                        {/* error msg */}
                        {errors.guests && (
                          <span className="text-red-600">
                            Please enter a valid number of guests.
                          </span>
                        )}
                      </div>

                      {/* name */}
                      <div className="form-control">
                        <label className="label justify-start text-base font-medium text-slate-900">
                          <span className="label-text">Name</span>
                          <span className="text-red-600 text-xl">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="input py-7 hover:shadow-md"
                          {...register("name", { required: true })}
                        />
                        {/* error msg */}
                        {errors.name && (
                          <span className="text-red-600">
                            Please enter your valid name.
                          </span>
                        )}
                      </div>
                      {/* phone */}
                      <div className="form-control">
                        <label className="label justify-start text-base font-medium text-slate-900">
                          <span className="label-text">Phone</span>
                          <span className="text-red-600 text-xl">*</span>
                        </label>

                        <input
                          type="number"
                          placeholder="Phone Number"
                          className="input py-7 hover:shadow-md"
                          min="0"
                          {...register("phone", { required: true })}
                        />
                        {/* error msg */}
                        {errors.phone && (
                          <span className="text-red-600">
                            Please enter a valid number of phone.
                          </span>
                        )}
                      </div>
                      {/* email */}
                      <div className="form-control">
                        <label className="label justify-start text-base font-medium text-slate-900">
                          <span className="label-text">Email</span>
                          <span className="text-red-600 text-xl">*</span>
                        </label>

                        <input
                          type="email"
                          placeholder="Your Email"
                          className="input py-7 hover:shadow-md"
                          {...register("email", { required: true })}
                        />
                        {/* error msg */}
                        {errors.email && (
                          <span className="text-red-600">
                            Please enter your valid email.
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      onSubmit={handleSubmit}
                      className="flex justify-center mt-8 ">
                      <button
                        type="submit"
                        {...register("submit")}
                        // disabled={disabled}
                        className=" border-none whitespace-nowrap bg-gradient-to-r from-[#835D23] hover:from-[#a57224] hover:to-[#d28209] to-[#c87f12] flex justify-center items-center gap-3 p-4 px-5 text-white bg-[#d1a054b3] hover:bg-[#ec9f2db3]">
                        <span className="text-xl font-semibold">
                          Book A Table
                        </span>
                        <FaCalendarAlt className=" text-2xl md:mx-0 mx-auto" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* location section */}
      <OurLocation />
    </div>
  );
};

export default Reservation;
