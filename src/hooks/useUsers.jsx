import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    isLoading: userLoading,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axiosSecure.get("/users/admin").then((res) => {
        return res.data;
      }),
  });

  return [users, refetch, userLoading];
};

export default useUsers;
