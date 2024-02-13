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
      fetch(`https://bistro-boss-server-cyan-nu.vercel.app/carts?email=${user.email}`).then((res) =>
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
