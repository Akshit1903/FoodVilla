import RestaurantCard from "./RestaurantCard";
import { restaurantDetails } from "../config";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterContent } from "../utils/helper";
import useOffline from "../utils/useOffline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  async function fetchRestaurants() {
    const URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5607066&lng=77.04997&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(URL, {
      method: "GET",
      mode: "cors",
      headers: {
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "*",
      },
    });
    const json = await data.json();
    const restData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(restData);
    setFilteredRestaurants(restData);
  }
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const isOffline = useOffline();
  if (isOffline) {
    return <h1>Please check your internet connection</h1>;
  }
  if (
    allRestaurants === undefined ||
    filteredRestaurants === undefined ||
    allRestaurants.length === 0
  ) {
    return <ShimmerUI />;
  }
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div className="text-center">
        <input
          className="p-1 m-1 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          data-testid="search-input"
        />
        {/* <input
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        /> */}
        <button
          className="bg-orange-600 hover:bg-orange-800 p-1 m-1 border-2 text-white rounded-lg"
          data-testid="search-btn"
          onClick={() => {
            setFilteredRestaurants(
              filterContent(searchText, restaurantDetails)
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center" data-testid="res-list">
        {filteredRestaurants.length === 0 && <h1>No Restaurants Found!</h1>}
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"./restaurants/" + restaurant.info.id}
          >
            <RestaurantCard rest={restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
