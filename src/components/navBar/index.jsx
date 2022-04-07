import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="about-us">About</Link>
      <Link to="cart">Cart</Link>
    </nav>
  );
}
