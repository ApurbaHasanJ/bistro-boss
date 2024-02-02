const SubBanner = () => {
  return (
    <section className="my-container mt-24 relative flex justify-center items-center">
      <img
        className="h-full w-full object-cover"
        src="https://i.postimg.cc/DwG5DpZH/chef-service.jpg"
        alt=""
      />
      <div className="bg-white text-center bg-opacity-70 p-6 sm:p-10 md:p-14 lg:p-20 absolute w-full sm:w-4/6">
        <h2 className="text-3xl mb-2 font-serif">BISTRO BOSS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium!
        </p>
      </div>
    </section>
  );
};

export default SubBanner;
