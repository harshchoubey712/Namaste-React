import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { resList } from '../../utils/mockData';

const Body = () => {
  // Local State Variable - Super powerful variable
  // Initialize your state with actual restaurant data here
  const [listOfRestaurants, setListOfRestaurants] = useState(
    // ...your initial restaurant data
    resList
  );

  const handleFilterClick = () => {
    // Filter restaurants to only those with an average rating greater than 4
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.data.avgRating > 4.1
    );
    // Update the state with the filtered list of restaurants
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterClick}>
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


// The image you've provided seems to show a Body component in a React application. This component is responsible for rendering a list of restaurant cards and includes a button to filter the list based on a rating criteria. Below is the code that would match the screenshot:

// Import Statements: The necessary modules are imported at the top of the file. This includes the RestaurantCard component for displaying individual restaurants, the useState hook from React for state management, and resList which contains mock data for the restaurants.

// useState Hook: useState is used to create a state variable listOfRestaurants initialized with resList (mock data imported from a file). The setListOfRestaurants function is used to update this state.

// Button for Filtering: There is a button with the class filter-btn which, when clicked, will trigger the handleFilterClick function.

// handleFilterClick Function: This function filters the listOfRestaurants to only include those with an avgRating greater than 4 and updates the state with setListOfRestaurants. It's important to note that this will replace the entire list with only the filtered items. If you want to be able to toggle back to the full list, you'll need to store it separately or have another state to keep track of whether the filter is applied.

// Rendering Restaurant Cards: The listOfRestaurants state is mapped over to render a RestaurantCard component for each restaurant. The key prop is provided with a unique identifier from the restaurant data, which is essential for React's rendering performance and diffing algorithm.

// Styling: The component uses class names body for the main div, filter for the div containing the filter button, and res-container for the div wrapping the restaurant cards. These classes should be styled appropriately in your CSS to reflect the desired layout and design.
