import React from "react";
import { ReactComponent as CartIcon } from "./assets/Cart.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9381ff;
  border-radius: 50%;
  position: fixed;
  bottom: 72px;
  right: 25px;

  @media (min-width: 426px) {
    background: #ffffff;
    position: relative;
    bottom: 0;
    right: 0;
  }
`;

const StyledCartIcon = styled(CartIcon)`
  path {
    fill: #ffffff;

    @media (min-width: 426px) {
      fill: #50514f;
    }
  }
`;

const CartCounter = styled.div`
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 50%;
  position: absolute;
  bottom: 14px;
  left: 14px;

  @media (min-width: 426px) {
    background: #50514f;
  }
`;

const CartCounterText = styled.p`
  color: #9381ff;
  text-align: center;
  font-weight: 600;

  @media (min-width: 426px) {
    color: #ffffff;
  }
`;

export default function CartIconComponent() {
  return (
    <CartContainer>
      <Link to="cart">
        <StyledCartIcon />
        <CartCounter>
          <CartCounterText>0</CartCounterText>
        </CartCounter>
      </Link>
    </CartContainer>
  );
}
