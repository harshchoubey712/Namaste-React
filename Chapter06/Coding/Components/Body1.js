import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {
  // Local State Variable - Super powerful variable
  // Initialize your state with actual restaurant data here
   const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  //  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => 
  {
    
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351928&lng=77.62448669999998&page_type=DESKTOP_WEB_LISTING");
    

  const json= await data.json();
  console.log(json);
  //  setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  // setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };

  

  // if(listOfRestaurants.length===0)
  //   {return <Shimmer/>;
  //  }
  

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>
          {
            const filteredList=listOfRestaurants.filter(
              (res) => res.data.avgRating >4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurantssss
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

