import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { emptyCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const emptyCartItems = () => {
    dispatch(emptyCart());
  };
  console.log(cartItems);
  return (
    <div className="flex flex-col min-h-[75vh] m-0">
      <h1 className="font-bold text-lg m-5 text-center">
        Cart Items
        {cartItems.length !== 0 && (
          <button
            className="m-1 p-1 bg-blue-100 hover:bg-blue-200 font-normal text-sm rounded-md"
            onClick={emptyCartItems}
          >
            Empty Cart
          </button>
        )}
      </h1>
      {cartItems.length === 0 && (
        <p className="text-center">The cart is empty</p>
      )}
      <div className="flex flex-wrap justify-center">
        {cartItems.map((cartItem) => (
          <MenuCard
            key={cartItem.card.info.id}
            menuDetails={cartItem}
            removeAddToCartButton={true}
          />
        ))}
      </div>
    </div>
  );
};
export default Cart;
