import { Link } from "react-router-dom";
import useOffline from "../utils/useOffline";
import { useSelector } from "react-redux";

const Header = () => {
  const isOffline = useOffline();
  const cartItems = useSelector((store) => store.cart.cartItems);
  return (
    <nav className="flex justify-around border-2">
      <Link href="/">
        <img
          className="h-24"
          src="https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699747200&semt=ais"
          alt="logo"
          data-testid="logo"
        />
      </Link>

      <ul className="flex list-none items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="px-8">
          <Link to="/about">About</Link>
        </li>
        <li className="px-8">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-8">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="px-8">
          <Link to="/cart" data-testid="cart-items-number">
            Cart- {cartItems.length} items
          </Link>
        </li>
        <li className="px-8" data-testid="online-status">
          {isOffline ? "Offline🔴" : "Online🟢"}
        </li>
      </ul>
    </nav>
  );
};
export default Header;
