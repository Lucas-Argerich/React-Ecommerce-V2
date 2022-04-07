import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 100px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(141, 141, 141, 0.2);
`;

const Left = styled.div`
  a {
    margin-right: 120px;
    font-weight: 600;
    font-size: 18px;
    &.active {
      color: #9381ff;
    }
  }
`;

const Right = styled.div``;

export default function NavBar() {
  return (
    <Nav>
      <Left>
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="about-us">About Us</NavLink>
      </Left>
      <Right>
        <Link to="cart">Cart</Link>
      </Right>
    </Nav>
  );
}
