import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useReservation = () => {
  const { user } = useContext(AuthContext);
  const {
    refetch,
    isPending: reservationPending,
    data: reservation = [],
    error,
  } = useQuery({
    queryKey: ["reservation", user?.email],
    queryFn: () =>
      fetch(`https://bistro-boss-server-cyan-nu.vercel.app/reservation/user/${user.email}`).then((res) =>
        res.json()
      ),
  });

  //   console.log(cart);
  if (error) {
    return "An error has occurred: " + error.message;
  }
  return {reservation, refetch, reservationPending};
};

export default useReservation;
