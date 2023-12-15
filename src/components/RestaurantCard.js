import { BASE_IMAGE_URL } from "../config";
const RestaurantCard = ({ rest }) => (
  <div className="shadow-lg hover:shadow-2xl border w-60 m-4 p-4 rounded-md border-solid border-black">
    <img
      className="rounded-xl"
      src={BASE_IMAGE_URL + rest.cloudinaryImageId}
      alt="restaurant"
    />
    <div className="">
      <h2 className="text-xl pt-2 font-semibold">{rest.name}</h2>
      <p className="text-md">{rest.locality + ", " + rest.areaName}</p>
      <p className="text-sm">{rest.avgRating} Stars</p>
      <h5 className="text-xs pt-1 break-words">{rest.cuisines.join(", ")}</h5>
    </div>
  </div>
);
export default RestaurantCard;
