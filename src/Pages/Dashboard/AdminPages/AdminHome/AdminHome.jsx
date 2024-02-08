import AdminHeroInfo from "./AdminHeroInfo";


const AdminHome = () => {
  return (
    <div className="my-container min-h-screen  mt-8">
      <h2 className="md:text-3xl text-2xl font-semibold font-[Cinzel] whitespace-nowrap">
        HI, WELCOME BACK!
      </h2>
      <AdminHeroInfo/>
    </div>
  );
};

export default AdminHome;
