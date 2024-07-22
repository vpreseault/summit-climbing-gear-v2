import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../Header.css";

const HeaderLang = ({
  showLanguageButton,
  onLanguageChange,
  currentLanguage,
}) => {
  return (
    <header className="header">
      <Link href="/" className="logo">
        LOGO
      </Link>
      <nav className="nav">
        {/* <a href="#about">About</a> */}
        <Link href="/bouldering">Blog</Link>
        <Link href="/workout-tracker">Workout Tracker</Link>
        <Link href="/shop" className="buy-gear">
          Buy Gear
        </Link>
        <Link href="/checkout">
          <Image
            className="shopping-cart"
            src="/./grocery-store.png" // Update the src path
            alt="Shopping cart icon"
            width={24}
            height={24}
          />
        </Link>
        {showLanguageButton && (
          <button onClick={onLanguageChange}>
            {currentLanguage === "en" ? "FR" : "EN"}
          </button>
        )}
      </nav>
    </header>
  );
};

export default HeaderLang;
