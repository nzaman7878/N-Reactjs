import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";


import React from "react";
const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(()=> {
    fetchData();
 }, []);

 const fetchData = async ()=> {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1745742&lng=91.76177799999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
 
  
 const json = await data.json();

 //optional chaining

 setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
 setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);

} ;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;