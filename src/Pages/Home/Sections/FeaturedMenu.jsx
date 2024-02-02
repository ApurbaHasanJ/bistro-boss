import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FeaturedMenu = () => {
  return (
    <section className=" mt-24 bg-cover bg-fixed relative bg-[url('https://i.postimg.cc/F15kJp4k/featured.jpg')] w-full ">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="py-[130px] text-white relative">
        <SectionTitle subTitle={"---Check it out---"} title={"FROM OUR MENU"} />

        {/* body div */}
        <div className="grid md:grid-cols-2 my-container lg:gap-14 sm:gap-9 gap-4 items-center">
          {/* img  */}
          <div>
            <img src="https://i.postimg.cc/F15kJp4k/featured.jpg" alt="" />
          </div>
          {/* description */}
          <div>
            <h3 className="text-lg">March 20, 2023</h3>
            <h2 className="text-lg">WHERE CAN I GET SOME?</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div className="h-6">
            <button className="btn-white px-4 py-2 uppercase font-medium text-lg">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
