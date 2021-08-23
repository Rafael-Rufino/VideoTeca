import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 50px;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #1e1e1e;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background: orange;
  color: white;
  height: 35px;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  border: none;
  margin-right: 20px;
  &:hover {
    filter: brightness(0.9);
  }
`;
