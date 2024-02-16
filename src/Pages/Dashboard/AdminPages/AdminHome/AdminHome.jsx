import AdminHeroInfo from "./AdminHeroInfo";
import MenuSoldChart from "./MenuSoldChart";
import SoldPieChart from "./SoldPieChart";

const AdminHome = () => {
  return (
    <div className="my-container min-h-screen z-10 mt-8">
      <h2 className="md:text-3xl text-2xl font-semibold font-[Cinzel] whitespace-nowrap">
        HI, WELCOME BACK!
      </h2>
      <AdminHeroInfo />
      <div className="mt-16 grid md:gap-1 gap-14 lg:grid-cols-2 grid-cols-1 justify-center items-center">
        <MenuSoldChart />
        <SoldPieChart />
      </div>
    </div>
  );
};

export default AdminHome;
