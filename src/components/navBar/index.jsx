import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartIconComponent from "../cartIconComponent";
import useMediaQuery from "@mui/material/useMediaQuery";

/*MOBILE*/
const Header = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 25px;
`;

const MenuIcon = styled.div`
  width: 33px;
  height: 4px;
  background: ${(props) => (props.deployed ? "#50514f00" : "#50514f")};
  z-index: 1;
  transition: 500ms;

  &::after {
    content: "";
    display: block;
    width: 33px;
    height: 4px;
    background: #50514f;
    position: relative;
    top: 6px;
    transform: ${(props) => props.deployed && "rotate(-45deg)"};
    transform-origin: 10% 0;
    transition: 500ms;
  }

  &::before {
    content: "";
    display: block;
    width: 33px;
    height: 4px;
    background: #50514f;
    position: relative;
    bottom: 10px;
    transform: ${(props) => props.deployed && "rotate(45deg)"};
    transform-origin: 10% 100%;
    transition: 500ms;
  }
`;

const Menu = styled.div`
  width: 100%;
  height: 0;
  background: #ffffff90;
  position: absolute;
  left: 0;
  top: 0;
  transition: 500ms;
  overflow: hidden;
`;

const NavMobile = styled.nav`
  margin: 100px 25px;
  display: flex;
  flex-direction: column;
  a {
    margin-right: 120px;
    font-weight: 700;
    font-size: 2.5rem;
    margin: 20px 0;
    &.active {
      color: #9381ff;
    }
  }
`;

/*PC*/
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
    font-size: 1.125rem;
    &.active {
      color: #9381ff;
    }
  }
`;

const Right = styled.div``;

export default function NavBar() {
  const isTablet = useMediaQuery("(max-width:768px)");
  const [isMenuDeployed, setIsMenuDeployed] = useState(false);

  return (
    <>
      {isTablet ? (
        <>
          <Header>
            <MenuIcon
              deployed={isMenuDeployed}
              onClick={() => setIsMenuDeployed(!isMenuDeployed)}
            />
            <Menu style={isMenuDeployed ? { height: "100%" } : {}}>
              <NavMobile>
                <NavLink to="/">Home</NavLink>
                <NavLink to="shop">Shop</NavLink>
                <NavLink to="about-us">About Us</NavLink>
              </NavMobile>
            </Menu>
          </Header>
          <CartIconComponent />
        </>
      ) : (
        <Nav>
          <Left>
            <NavLink to="/">Home</NavLink>
            <NavLink to="shop">Shop</NavLink>
            <NavLink to="about-us">About Us</NavLink>
          </Left>
          <Right>
            <CartIconComponent />
          </Right>
        </Nav>
      )}
    </>
  );
}
