import { useParams } from "react-router-dom";
import { ShimmerCard } from "./ShimmerUI";
import { BASE_IMAGE_URL } from "../config";
import MenuCard from "./MenuCard";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { restID } = useParams();
  const [restaurantInfo, menuItems] = useRestaurantDetails(restID);

  if (!menuItems) {
    return (
      <div className="center">
        <ShimmerCard />
      </div>
    );
  }

  return (
    <div className="text-center" data-testid="search-input">
      <div>
        <h1 className="text-4xl p-2">{restaurantInfo.name}</h1>
        <h3 className="font-bold">
          {restaurantInfo.locality + ", " + restaurantInfo.areaName}
        </h3>
        <h4 className="text-lg">
          {restaurantInfo.costForTwoMessage +
            " : " +
            restaurantInfo.cuisines.join(", ")}
        </h4>
        <h5 className="text-xs font-bold">
          {restaurantInfo.avgRatingString} Stars
        </h5>
        <img
          className="border-2 mx-auto mt-4 w-52 rounded-3xl"
          src={BASE_IMAGE_URL + restaurantInfo.cloudinaryImageId}
          data-testid="rest-image"
        />
      </div>
      <div
        className="flex flex-wrap justify-center pt-10"
        data-testid="menu-cards"
      >
        {menuItems.map((menuItem) => (
          <MenuCard key={menuItem.card.info.id} menuDetails={menuItem} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantDetails;
