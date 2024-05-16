import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
`;

export const RatioFieldset = styled.fieldset`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
`;

export const InputCSS = styled.input`
  padding: 10px;
  width: 100%;
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 1rem;
  outline-color: transparent;

  &:focus,
  &:focus-visible {
    outline: none;
    border: 1px solid #aea8b7;
  }

  &:invalid[focused="true"] {
    border: 1px solid red;
  }

  &:invalid[focused="true"] ~ span {
    display: block;
  }
`;

export const Span = styled.span`
  color: tomato;
  display: none;
`;
