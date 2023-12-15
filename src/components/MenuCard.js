import { useDispatch } from "react-redux";
import { BASE_MENU_IMAGE_URL } from "../config";
import { addCartItem, removeCartItem } from "../utils/cartSlice";
const MenuCard = ({ menuDetails, removeAddToCartButton }) => {
  const menuInfo = menuDetails.card.info;
  const dispatch = useDispatch();
  const addMenuItemToCart = () => {
    dispatch(addCartItem(menuDetails));
  };
  const removeItemFromCart = () => {
    dispatch(removeCartItem(menuInfo.id));
  };
  return (
    <div className="border-2 border-neutral-400 rounded-lg m-4 p-4 w-60 text-center shadow-md">
      <h2 className="text-lg font-semibold">{menuInfo.name}</h2>
      <h4 className="text-sm p-2">Rs. {menuInfo.price / 100}</h4>
      <img
        className="h-24 mx-auto border-2 rounded-lg"
        src={BASE_MENU_IMAGE_URL + menuInfo.imageId}
      />
      {removeAddToCartButton ? (
        <button
          className="m-1 p-1 bg-red-100 hover:bg-red-200 font-normal text-sm rounded-md"
          onClick={removeItemFromCart}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="mt-2 p-1 bg-blue-100 hover:bg-blue-200 rounded-md"
          onClick={addMenuItemToCart}
          data-testid="add-to-card-btn"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
export default MenuCard;
