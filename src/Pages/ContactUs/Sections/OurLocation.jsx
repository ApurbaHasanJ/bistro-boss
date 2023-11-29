
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { BiSolidLocationPlus } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";

const OurLocation = () => {
    return (
        <section className="mt-24 my-container">
        <SectionTitle subTitle={"---Visit Us---"} title={"OUR LOCATION"} />

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-16">
          {/* First */}
          <div className="border border-gray-100 shadow ">
            <div className="bg-[#D1A054] py-5">
              <BsFillTelephonePlusFill className="text-3xl mx-auto text-white" />
            </div>
            <div className="mx-5 mb-5 pt-8 pb-12 text-center bg-slate-100 ">
              <h3 className="text-slate-950 text-2xl">PHONE</h3>
              <p className="text-slate-600 mt-3">
                +38 (012) 34 56 789 <br />
                +38 (010) 30 56 000
              </p>
            </div>
          </div>

          {/* 2nd */}
          <div className="border border-gray-100 shadow">
            <div className="bg-[#D1A054] py-5">
              <BiSolidLocationPlus className="text-3xl mx-auto text-white" />
            </div>
            <div className="mx-5 mb-5 pt-8 pb-12 text-center bg-slate-100">
              <h3 className="text-slate-950 text-2xl">ADDRESS</h3>
              <p className="text-slate-600 mt-3">
                123 Main Street <br />
                Anytown, CA 91234
              </p>
            </div>
          </div>

          {/* 3rd */}
          <div className="border border-gray-100 shadow">
            <div className="bg-[#D1A054] py-5">
              <AiFillClockCircle className="text-3xl mx-auto text-white" />
            </div>
            <div className="mx-5 mb-5 pt-8 pb-12 text-center bg-slate-100">
              <h3 className="text-slate-950 text-2xl">WORKING HOURS</h3>
              <p className="text-slate-600 mt-3">
                Mon - Fri: 08:00 - 22:00 <br />
                Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OurLocation;