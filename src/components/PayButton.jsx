import React from "react";
import axios from "axios";

const PayButton = ({ data }) => {
  const handleCheckout = async () => {
    // https://tech-alpha-qtwm.onrender.com/api
    // http://localhost:4000/api/
    axios
      .post(`https://tech-alpha-qtwm.onrender.com/api/stripe/create-checkout-session`, {
        data,
        userId: 3,
      })
      .then((response) => {
        if (response.data.url) {
          console.log(response.data.url)
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button
        onClick={() => handleCheckout()}
        className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300"
      >
        Check out
      </button>
    </>
  );
};

export default PayButton;
