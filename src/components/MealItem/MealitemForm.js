import styled from "styled-components";
import Input from "../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button>+ Add</Button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  text-align: right;
`;
const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;

  ${Wrapper} &:hover, 
  ${Wrapper} &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

export default MealItemForm;
