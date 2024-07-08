import React from "react";

const ProductCard = ({ name, price }: { name: string; price: string }) => {
  return (
    <div className="product-card">
      <div className="product-image">IMAGE</div>
      <h4>{name}</h4>
      <p>{price}</p>
      <button className="buy-now">Buy now</button>
    </div>
  );
};

export default ProductCard;
