import { useQuery } from "@tanstack/react-query";

const useAdminReservations = () => {
  const {
    refetch,
    isPending: reservationPending,
    // error,
    data: reservations = [],
  } = useQuery({
    queryKey: ["reservations"],
    queryFn: () =>
      fetch("http://localhost:5000/reservation/admin").then((res) =>
        res.json()
      ),
  });

  return { refetch, reservations, reservationPending };
};

export default useAdminReservations;
