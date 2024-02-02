import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCarts";

const FoodCard = ({ menu }) => {
  const { name, image, price, recipe, _id } = menu;
  const [, refetch] = useCart();
  // console.log(cart);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (menu) => {
    console.log(menu);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        name,
        image,
        price,
        userName: user.displayName,
        userEmail: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // using refetch for updating the cart
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to cart successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Login Required",
        text: "Please login to add the recipe to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          let timerInterval;
          Swal.fire({
            title: "Thanks!",
            text: "You're being redirected to the login page.",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              clearInterval(timerInterval);
              navigate("/login", { state: { from: location } });
            },
          });
        }
      });
    }
  };

  return (
    <div className="card  mx-auto mt-10 rounded-none rounded-t-md bg-base-100 shadow-md">
      <img className="w-full relative rounded-t-xl" src={image} alt="Recipe" />
      <p className="absolute top-4 right-4 badge">${price}</p>
      <div className="card-body bg-slate-100">
        <h2 className=" text-center font-semibold text-xl">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(menu)}
            className="btn-card px-5 py-3  text-lg font-medium  uppercase">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
