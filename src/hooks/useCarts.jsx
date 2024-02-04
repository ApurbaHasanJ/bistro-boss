import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCarts = () => {
  const { user } = useContext(AuthContext);
  const {
    refetch,
    isPending: cartsLoading,
    data: carts = [],
    error,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/carts?email=${user.email}`).then((res) =>
        res.json()
      ),
  });

  //   console.log(cart);
  if (error) {
    return "An error has occurred: " + error.message;
  }
  return [carts, refetch, cartsLoading];
};

export default useCarts;
