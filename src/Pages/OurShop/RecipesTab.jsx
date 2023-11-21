import { useState } from "react";
import FoodCard from "../Shared/FoosCard/FoodCard";

const RecipesTab = ({ menus }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = menus.slice(indexOfFirstItem, indexOfLastItem);

  // change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
        {currentItems.map((item) => (
          <FoodCard key={item._id} menus={item} />
        ))}
      </div>

      {/* pagination button */}
      <div className="flex justify-center mt-12">
        {Array(Math.ceil(menus.length / itemsPerPage))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 rounded-full ${
                currentPage === index + 1
                  ? "btn-card px-5"
                  : "bg-slate-100 rounded-md px-5 text-[#BB8506]"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </>
  );
};


export default RecipesTab;
