import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/products/cartSlice";
import { currencyFormatter } from "../utlities/currencyFormatter";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCardHandler = (product) => {
    dispatch(addToCart(product))
    navigate("/cart");
  };

  return (
    <div className="product flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl duration-300">
      <div className="img h-72 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover"  />
      </div>
      <div className="texts flex flex-col gap-2 px-5 pb-5">
        <span className="catagory-tag text-xl uppercase  font-semibold tracking-widest text-teal-500">
          {product.category}
        </span>
        <h3 className="title text-xl font-medium h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-500 h-[4.8rem] overflow-hidden"> {product.description}</p>
        <div className="flex justify-between items-center font-medium text-rose-500">
          <span className="price text-xl ">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCardHandler(product)}
            className="cursor-pointer uppercase bg-violet-500 text-violet-50 font-medium py-3 px-8 rounded-md hover:bg-rose-500 hover:text-rose-50 duration-300 shadow-lg shadow-violet-300 hover:shadow-rose-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
