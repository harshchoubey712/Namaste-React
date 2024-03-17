import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const Body = () => {
  // Local State Variable - Super powerful variable
  // Initialize your state with actual restaurant data here
  //  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

  //  const [filteredRestaurant, setfilteredRestaurant] = useState(resList);

   const [filteredRestaurant, setfilteredRestaurant] = useState([]);

   const [searchText,setsearchText]=useState("");

   console.log("Body rendered");

 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => 
  {
    
    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    
    // const data= await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

  const json= await data.json();
  console.log(json);

  //json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  const onlineStatus= useOnlineStatus();

  if(onlineStatus===false)
  return (
  <h1>Looks like you're offline!!!
      Please check internet connection.

  </h1>);


  return listOfRestaurants.length === 0 ?
  (
  <Shimmer/> 
  ):

  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
          type="text" 
          className="search-box" 
          value={searchText}
          onChange={(e)=>
            {
              setsearchText(e.target.value);
            }
          }/>

          <button onClick={()=>
            {
             console.log(searchText);

             const filteredRestaurant=listOfRestaurants.filter((res) =>
             res.info.name.toLowerCase().includes(searchText.toLowerCase()));

             setfilteredRestaurant(filteredRestaurant);
            }
          }>Search</button>

        </div>
        <button className="filter-btn" onClick={()=>
          {
            const filteredList=listOfRestaurants.filter(
              (res) => res.info.avgRating >4.4
              
            );
            console.log(filteredList);
          //  setListOfRestaurants(filteredList);
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          // <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        <Link 
        key={restaurant.info.id}
        to={"/restaurants/"+ restaurant.info.id}
        >
        <RestaurantCard resData={restaurant} />

        </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

