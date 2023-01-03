import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../utlities/currencyFormatter";
import { BsArrowLeft} from "react-icons/bs";
const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
];
const Cart = () => {
  const navigate=useNavigate()

 const productCard=()=>{
  navigate("/products")
  }
  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
        Shopping
      </h2>

      <div className="cart-container">
        <div className="product-headlines grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
          <div className="col-product col-span-2">Product</div>
          <div className="col-unit-price">Unit Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-total-price ml-auto">TOtal price</div>
        </div>

        {data.map((product) => (
          <div className="product grid grid-cols-5 gap-10 mt-10 border-b pb-5">
            <div className="left flex col-span-2">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-32 object-cover"
              />
              <div className="details flex flex-col gap-3 items-start">
                <span>{product.name}</span>
                <button className="uppercase">Remove</button>
              </div>
            </div>
            <div className="unit-price">{currencyFormatter(product.price)}</div>
            <div className="counter flex">
              <button className="h-10 w-10 bg-gray-200 active:bg-gray-700 active:text-gray-50">
                -
              </button>
              <button className="h-10 w-10 bg-gray-200 active:bg-gray-700 active:text-gray-50">
                1
              </button>
              <button className="h-10 w-10 bg-gray-200 active:bg-gray-700 active:text-gray-50">
                +
              </button>
            </div>
            <div className="total-price ml-auto">
              {" "}
              {currencyFormatter(product.price)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-lower flex justify-between items-start py-10">
        <button className="clear-btn ">Clear Cart</button>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between w-full  text-2xl font-medium ">
            <span>Subtotal</span>
            <span>$200</span>
          </div>
          <p className="text-gray-400">
            Taxes and shipping costs are calculated at the checkout
          </p>
          <button className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300">
            Checkout
          </button >
            {" "}
            <button className="continune uppercase text-sky-500 font-medium flex gap-1 mt-2" 
            onClick={productCard}
            >
              <BsArrowLeft className="mt-1" />
              <span>Continue Shopping</span>
            </button>

        </div>
      </div>
    </div>
  );
};

export default Cart;
