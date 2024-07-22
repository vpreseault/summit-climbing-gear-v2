import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../Header.css";

const Header = () => {
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
            src="https://vpreseault.github.io/summit-climbing-gear-v2/grocery-store.png" // Update the src path
            alt="Shopping cart icon"
            width={24}
            height={24}
          />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
