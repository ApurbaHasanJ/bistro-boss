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
      fetch("http://localhost:5000/banners").then((res) => res.json()),
  });

  if (isPending) {
    <Loader />;
  }
  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [banners, isPending];
};

export default useBanner;
