import { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import styled, { css, keyframes } from "styled-components";
import CartContext from "../../store/cart-context";

const HeaderCardButton = ({ onClick }) => {
  const [btnAnimate, setBtnAnimate] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimate(true);

    const timer = setTimeout(() => {
      setBtnAnimate(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button onClick={onClick} animate={btnAnimate}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Your Cart</span>
      <Badge>{numOfCartItems}</Badge>
    </Button>
  );
};

const Bump = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  ${(props) =>
    props.animate &&
    css`
      animation: ${Bump} 300ms ease-out;
    `}

  &:hover,
  &:active {
    background-color: #2c0d00;
  }
`;

const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;
const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  ${Button}:hover &,
  ${Button}:active & {
    background-color: #92320c;
  }
`;

export default HeaderCardButton;
