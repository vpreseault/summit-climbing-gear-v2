import React from "react";
import Checkout from "../components/Checkout";
import Header from "../components/Header";
import "../globals.css";

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <hr></hr>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
