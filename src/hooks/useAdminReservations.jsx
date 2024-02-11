import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdminReservations = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    isPending: reservationPending,
    // error,
    data: reservations = [],
  } = useQuery({
    queryKey: ["reservations"],
    queryFn: () =>
      axiosSecure
        .get("http://localhost:5000/reservation/admin")
        .then((res) => res.data),
  });

  return { refetch, reservations, reservationPending };
};

export default useAdminReservations;
