import { useQuery } from "@tanstack/react-query";
import LandingPage from "../Pages/LandingPage";

const useMenu = () => {
  const {
    isPending: loading,
    error,
    data,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: () =>
      fetch("http://localhost:5000/menus").then((res) => res.json()),
  });

  if (loading) {
    <LandingPage/>;
  }
  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [data, loading];
};

export default useMenu;
