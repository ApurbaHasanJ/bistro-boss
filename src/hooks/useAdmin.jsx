import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user?.email) {
        try {
          const response = await axiosSecure.get(`/users/admin/${user?.email}`);
          console.log(response.data);
          return response.data.admin;
        } catch (error) {
          console.error("Error fetching admin status:", error);
          return false; // Return a default value when there's an error
        }
      } else {
        return false; // Return a default value when user email is null or undefined
      }
    },
    // Enable the query only when user has a valid email
    // enabled: !!user?.email,
  });

  return [isAdmin, adminLoading];
};

export default useAdmin;
