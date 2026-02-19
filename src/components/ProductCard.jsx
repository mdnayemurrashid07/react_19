import React from "react";

const ProductCard = ({src ,text}) => {
  return (
    <div className="page">
      <div className="card">
        <div className="badge"></div>

        <div className="image-box">
          <img
            src={src}
          />
        </div>
        <div className="content">
          <h1 className="text">{text}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          </p>

          <div className="price-rating">
            <h1>$20</h1>

            <div className="rating">
              <span>⭐⭐⭐⭐☆</span>
              <p>Discount 50%</p>
            </div>
          </div>
        </div>

        <button className="button">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
