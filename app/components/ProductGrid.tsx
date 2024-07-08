import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    { name: "Product Name", price: "$60.00" },
    { name: "Product Name", price: "$60.00" },
    { name: "Product Name", price: "$60.00" },
    { name: "Product Name", price: "$60.00" },
    { name: "Product Name", price: "$60.00" },
    { name: "Product Name", price: "$60.00" },
    { name: "Product Name", price: "$60.00" },
    { name: "Product Name", price: "$60.00" },
    { name: "Product Name", price: "$60.00" },
  ];

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductGrid;
