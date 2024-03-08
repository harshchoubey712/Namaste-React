import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu  = () =>
{
  const [ resInfo, setresInfo]=useState(null);

  const {resId}=useParams();

  useEffect(() => {fetchMenu();}, []); 

  const fetchMenu = async () =>
  {
    const data= await fetch(MENU_API + resId);

    
    const json=await data.json();
    console.log(json);
    setresInfo(json.data);
    // console.log(resInfo.cards[0].card.card);
  };

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