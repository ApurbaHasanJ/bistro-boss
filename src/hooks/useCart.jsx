import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Pages/Shared/Loader/Loader";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const {
    refetch,
    isPending,
    data: carts = [],
    error,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/carts?email=${user.email}`).then((res) =>
        res.json()
      ),
  });
  if (isPending) {
    <Loader />;
  }
  //   console.log(cart);
  if (error) {
    return "An error has occurred: " + error.message;
  }
  return [carts, refetch, isPending];
};

export default useCart;