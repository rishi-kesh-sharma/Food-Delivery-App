/* eslint-disable react/prop-types */
import { useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
const FoodItem = ({ name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt={name} />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => {
              setItemCount((prev) => prev + 1);
            }}
            src={assets.add_icon_white}
            alt="icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove icon"
              onClick={() => setItemCount((prev) => prev - 1)}
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Nrs{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;