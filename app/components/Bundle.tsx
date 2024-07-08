import React from "react";
import Image from "next/image";

const Bundle = () => {
  const products = [
    {
      id: 1,
      name: "La Sportiva Solution Climbing Shoes - Unisex",
      price: 172.46,
      image: "/./shoes1.avif", // Replace with actual image path
    },
    {
      id: 2,
      name: "Black Diamond Solution Harness - Men's",
      price: 99.95,
      image: "/./harness1.avif", // Replace with actual image path
    },
    {
      id: 3,
      name: "Edelrid Boa Eco 9.8mm Rope",
      price: 259.95,
      image: "/./rope1.avif", // Replace with actual image path
    },
  ];

  return (
    <div className="product-bundle">
      <h2>Popular Bundle</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <button>Buy Bouldering Bundle</button>
    </div>
  );
};

export default Bundle;
