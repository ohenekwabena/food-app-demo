import styled, { keyframes } from "styled-components";
import { DialogContent, DialogOverlay } from "@reach/dialog";

const Cart = ({ onClose }) => {
  const cartItems = (
    <CartItems>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </CartItems>
  );

  return (
    <Wrapper onDismiss={onClose}>
      <Content>
        {cartItems}
        <AmountTotal>
          <span>Total Amount</span>
          <span>35.62</span>
        </AmountTotal>
        <Actions>
          <AltButton onClick={onClose}>Close</AltButton>
          <OrderButton>Order</OrderButton>
        </Actions>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* z-index: 20; */
  background-color: rgba(0, 0, 0, 0.75);
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Content = styled(DialogContent)`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  /* z-index: 30; */
  animation: ${slideDown} 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }
`;

const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`;

const AmountTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Actions = styled.div`
  text-align: right;
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;

  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

const AltButton = styled(Button)`
  color: #8a2b06;
`;

const OrderButton = styled(Button)`
  background-color: #8a2b06;
  color: white;
`;

export default Cart;
