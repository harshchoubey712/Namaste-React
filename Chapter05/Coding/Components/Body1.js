import React from 'react';
import RestaurantCard from './RestaurantCard'; // Assuming this is the component being used
import { resList } from '../../utils/mockData';


const Body = () => {
  // Assuming resList is an array of restaurant objects passed as a prop or defined in state
 

  return (
    <div className="body">
      <div className="search">Searchesss</div>
      <div className="res-container" Checking container>
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
      
        ))}
      </div>
    </div>
  );
};

export default Body;
