import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: () => {
      if (user?.email) {
        return axiosSecure.get(`users/admin/${user?.email}`).then((res) => {
          return res.data.admin;
        });
      } else {
        // Return a default value when user is null or undefined
        return false;
      }
    },
    // Enable the query only when user has a valid email
    enabled: !!user?.email,
  });

  return [isAdmin, adminLoading];
};

export default useAdmin;
