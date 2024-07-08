import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from the correct package
import "../Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="logo">
        LOGO
      </Link>
      <nav className="nav">
        {/* <a href="#about">About</a> */}
        <Link href="/blog">Blog</Link>
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
      </nav>
    </header>
  );
};

export default Header;
