import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const usePayHistory = () => {
  const { user } = useContext(AuthContext);
  const {
    refetch,
    isPending: historyLoading,
    data: payHistories = [],
    error,
  } = useQuery({
    queryKey: ["pay-history", user?.email],
    queryFn: () =>
      fetch(`https://bistro-boss-server-cyan-nu.vercel.app/pay-history/user/${user?.email}`).then(
        (res) => res.json()
      ),
  });

  //   console.log(cart);
  if (error) {
    return "An error has occurred: " + error.message;
  }
  return {payHistories, refetch, historyLoading};
};

export default usePayHistory;
