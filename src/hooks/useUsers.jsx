import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const {
    isPending: userLoading,
    data: users = [],

    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/users/admin").then((res) => res.json()),
  });

  return [users, refetch, userLoading];
};

export default useUsers;
