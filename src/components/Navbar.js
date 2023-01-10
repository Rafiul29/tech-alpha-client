
import { Link,NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";


const Navbar = ({ isNavActiveStyles }) => {

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="navbar-bg  bg-violet-500 text-violet-50 h-20  flex justify-center items-center">
      <div className="navbar container  mx-auto flex justify-between items-center">
        <div className="left">
          <span className="text-xl font-bold ">
            tech
            <span className="text-orange-500">Alpha</span>
          </span>
        </div>
        <div className="right flex items-center gap-5">
          <NavLink to="/" className="nav-link" style={isNavActiveStyles} >
            Home
          </NavLink>
          <NavLink to="/products" className="nav-link"style={isNavActiveStyles} >
            Products
          </NavLink>
          <Link to="/cart">
            <span className="cart-icons relative">
              <BsCart3 />
              <span className="cart-counter absolute -top-3 -right-3 text-x5 bg-orange-600 h-5 w-5 rounded-full flex items-center justify-center font-medium">
               
              {cartItems.length}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
