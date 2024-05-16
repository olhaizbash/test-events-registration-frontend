import styled from "styled-components";

export const TitleHome = styled.h1`
  margin: 0 auto;
  text-align: center;
`;

export const EventListCSS = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const FilterInputCSS = styled.input`
  padding: 10px;
  width: 200px;
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
`;
