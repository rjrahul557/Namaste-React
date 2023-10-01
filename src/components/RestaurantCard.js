import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({
  name,
  costForTwo,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img className="restaurant-image" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
}

export default RestaurantCard;
