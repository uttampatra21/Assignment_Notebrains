import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Cards.scss";

const Cards = () => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    toast.success("Added to cart!", { position: "top-right" });
  };

  const handleRemoveFromCart = () => {
    setInCart(false);
    toast.error("Removed from cart!", { position: "top-right" });
  };

  return (
    <div id="cards">
      <div className="__cards">
        <div className="__top">
          <h4>Top Pick</h4>
          <div className="__icon">
            {inCart ? (
              <i onClick={handleRemoveFromCart} className="bx bxs-heart"></i>
            ) : (
              <i onClick={handleAddToCart} className="bx bx-heart"></i>
            )}
          </div>
        </div>

        <div className="__middle">
          <img
            src="https://publishergrowth.com/images/thumbnail/Hilltopads_logo.webp"
            alt="Zepto"
          />
        </div>

        <div className="__bottom">
          <h4>Zepto</h4>
          <div className="__star">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <div className="__email">
            <p>View Profile</p>

            <button type="button">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
