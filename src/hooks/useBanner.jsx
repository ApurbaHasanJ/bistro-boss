import { useQuery } from "@tanstack/react-query";

import Loader from "../Pages/Shared/Loader/Loader";

const useBanner = () => {
  const {
    isPending,
    error,
    data: banners = [],
  } = useQuery({
    queryKey: ["banners"],
    queryFn: () =>
      fetch("https://bistro-boss-server-cyan-nu.vercel.app/banners").then((res) => res.json()),
  });

  
  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [banners, isPending];
};

export default useBanner;
