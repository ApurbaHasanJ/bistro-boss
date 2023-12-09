import { useQuery } from "@tanstack/react-query";
import LandingPage from "../Pages/LandingPage";

const useUsers = () => {
  const {
    isPending: userLoading,
    data: users = [],
    error,
    refetch
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users").then((res) => res.json()),
  });
  
  if (userLoading) {
    <LandingPage/>;
  }
  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [users,refetch, userLoading];
};

export default useUsers;
