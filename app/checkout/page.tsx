"use client";

import React, { useState } from "react";
import Checkout from "../components/Checkout";
import CheckoutFr from "../components/CheckoutFr";
import HeaderLang from "../components/HeaderLang";
import "../globals.css";

const CheckoutPage = () => {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "fr" : "en"));
  };

  return (
    <div>
      <HeaderLang
        showLanguageButton={true}
        onLanguageChange={handleLanguageChange}
        currentLanguage={language}
      />
      <hr></hr>
      {language === "en" ? <Checkout /> : <CheckoutFr />}
    </div>
  );
};

export default CheckoutPage;
