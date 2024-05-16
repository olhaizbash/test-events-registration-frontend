import styled from "styled-components";

export const Event = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
  width: 300px;
  height: 300px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid black;
  background: transparent;
  cursor: pointer;
  width: 90px;

  &:hover,
  &:focus {
    background: #c3b7b791;
  }
`;

export const Partisipant = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
  width: 200px;
  height: 100px;
`;
