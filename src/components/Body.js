import { useEffect, useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";


function FilterData(searchText,restaurants){
  
    return restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );

}
const Body = () => {

  const [searchText,setSearchText] = useState();

  const [restaurants,setRestaurants] = useState(restaurantList)
  return (

    <div className="body">
    <div className="search-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="search" 
        value={searchText}
        onChange={(e) =>{
          setSearchText(e.target.value);
        }}
      />
      <button className="search-btn"
        onClick = {()=>{
          const data = FilterData(searchText,restaurants)
          setRestaurants(data);
        }}>
        Click 
      </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    </div>
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        return (
        <RestaurantCard {...restaurant.info}/>
        );
      })}
    </div>
    </div>
  );
};

export default Body;
