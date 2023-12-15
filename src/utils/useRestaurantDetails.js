import { useEffect, useState } from "react";
import { BASE_RESTAURANT_INFO_URL } from "../config";
const useRestaurantDetails = (restID) => {
  const [menuItems, setMenuItems] = useState([null, null]);
  useEffect(() => {
    getMenuItems();
  }, []);
  async function getMenuItems() {
    const data = await fetch(BASE_RESTAURANT_INFO_URL + restID);
    const restaurantDetails = await data.json();
    const restaurantInfo = restaurantDetails.data.cards[0].card.card.info;
    const menuInfo =
      restaurantDetails.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    let toBeMenuItems = [];
    menuInfo.forEach((e) => {
      if (e.card.card.itemCards !== undefined) {
        toBeMenuItems = [...toBeMenuItems, ...e.card.card.itemCards];
      }
    });
    toBeMenuItems.sort((a, b) => a.card.info.price - b.card.info.price);
    setMenuItems([restaurantInfo, toBeMenuItems]);
  }
  return menuItems;
};
export default useRestaurantDetails;
