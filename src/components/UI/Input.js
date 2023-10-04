import styled from "styled-components";

const Input = ({ input, label }) => {
  return (
    <Wrapper>
      <Label htmlFor={input.id}>{label}</Label>
      <MainInput {...input} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;

const MainInput = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`;

export default Input;
