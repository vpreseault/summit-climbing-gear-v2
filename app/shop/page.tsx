import React from "react";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import "../globals.css";
import "../shop.css";

const ShopPage = () => {
  return (
    <div>
      <Header />
      <hr></hr>
      <div className="shop-page">
        <header>
          <h1>Shop Our Gear</h1>
        </header>
        <div className="content">
          <Sidebar />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
