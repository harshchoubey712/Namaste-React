import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu  = () =>
{
  

  const {resId}=useParams();

  const resInfo= useRestaurantMenu(resId);



  //data.cards[0].card.card.info.avgRatingString
  // console.log(resInfo?.cards[0]?.card.card);

  if(resInfo===null) return <Shimmer/>;
  
  const { name, cuisines, costForTwoMessage } = 
  resInfo?.cards[0]?.card?.card?.info;

  // const {itemCards}=resInfo?.cards[2].cardsGroup
  const {itemCards}= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  

  console.log(itemCards);

 // if(resInfo===null) return <Shimmer/>;

  return  (
    <div className="menu">
      <h1>{name}</h1>
      
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      {/* <h3>{cloudinaryImageId}</h3>  */}
      <h4>Menu</h4>

      <ul>
        {itemCards.map( (item) => (
        <li key={item.card.info.id}>
          {item.card.info.name}
          -{"Rs"}
          {item.card.info.price/100 || item.card.info.defaultPrice/100}
        </li>
        ))}
        {/* <li>
        {itemCards[0].card.info.name}
        </li>
        <li>
        {itemCards[1].card.info.name}
        </li>
        <li>
        {itemCards[2].card.info.name}
        </li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;