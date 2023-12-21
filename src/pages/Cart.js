import {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import { currencyFormatter } from "../utlities/currencyFormatter";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart,clearCart ,decreaseCart,addToCart,getSubtotal} from "../features/products/cartSlice.js";
import PayButton from "../components/PayButton.jsx";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems: data ,cartTotalAmount:subtotal} = useSelector((state) => state.cart);
  
  const productCard = () => {
    navigate("/products");
  };

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecrease=(product)=>{
    dispatch(decreaseCart(product))
  }

  const handleIncrease=(product)=>{
    dispatch(addToCart(product))
  }


  useEffect(() => {
    dispatch(getSubtotal())
  }, [data,dispatch])
  

  
  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
      {data.length>0? `You've added ${data.length} item${data.length>1? "s":""}`:"Cart is Empty" }
      </h2>
      <div className="text-center">
       {data.length===0 && (
        <Link to="/products" className="text-sky-500 cursor-pointer">Start Shopping now</Link>
       )}
      </div>
      {data.length>0 && (
      <>
      <div className="cart-container">
        <div className="product-headlines grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
          <div className="col-product col-span-2">Product</div>
          <div className="col-unit-price">Unit Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-total-price ml-auto">TOtal price</div>
        </div>

        {data?.map((product) => (
          <div key={product._id} className="product grid grid-cols-5 gap-10 mt-10 border-b pb-5">
            <div className="left flex col-span-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-32 object-cover"
              />
              <div className="details flex flex-col gap-3 items-start">
                <span>{product.name}</span>
                <button
                  onClick={() => handleRemove(product)}
                  className="uppercase hover:text-rose-300 duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="unit-price">{currencyFormatter(product.price)}</div>
            <div className="counter flex">
              <button 
              onClick={()=>handleDecrease(product)}
              className="h-10 w-10 border border-gray-300 bg-gray-200 active:bg-gray-700 active:text-gray-50">
                -
              </button>
              <button className="h-10 w-10 border border-gray-300  bg-gray-200 active:bg-gray-700 active:text-gray-50">
               {product.cartQuantity}
              </button>
              <button 
              onClick={()=>handleIncrease(product)}
              className="h-10 w-10 border border-gray-300 bg-gray-200 active:bg-gray-700 active:text-gray-50">
                +
              </button>
            </div>
            <div className="total-price ml-auto">
              {" "}
              {currencyFormatter(product.price * product.cartQuantity)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-lower flex justify-between items-start py-10">
        <button
          onClick={() => dispatch(clearCart())}
          className="clear-btn uppercase bg-gray-100 py-3 px-5 border border-gray-200 font-medium hover:text-rose-600 hover:border-rose-200 duration-300 hover:bg-rose-200"
        >
          Clear Cart
        </button>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between w-full  text-2xl font-medium ">
            <span>Subtotal</span>
            <span>{currencyFormatter(subtotal)}</span>
          </div>
          <p className="text-gray-400">
            Taxes and shipping costs are calculated at the checkout
          </p>
          <PayButton data={data}/>
          {/* <button className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300">
         {data &&   
          </button>{" "} */}
          <button
            className="continune uppercase text-sky-500 font-medium flex gap-1 mt-2"
            onClick={productCard}
          >
            <BsArrowLeft className="mt-1" />
            <span>Continue Shopping</span>
          </button>
        </div>
      </div>
      </>)
      }
      
    </div>
  );
};

export default Cart;
