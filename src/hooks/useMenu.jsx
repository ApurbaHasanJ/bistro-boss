import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const {
    isPending: loading,
    refetch,
    error,
    data = [],
  } = useQuery({
    queryKey: ["menus"],
    queryFn: () =>
      fetch("http://localhost:5000/menus").then((res) => res.json()),
  });

  // Reverse the data array
  const reversedData = [...data].reverse();

  console.log(reversedData);

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return [reversedData, loading, refetch, error];
};

export default useMenu;
