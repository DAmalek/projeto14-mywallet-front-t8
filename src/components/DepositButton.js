import React from "react";
import styled from "styled-components";
import { primeryColor } from "../constants/colors";

export default function DepositButton({ img, title }) {
  return (
    <>
      <DButton>
        <img src={img} atl="aa" />
        <h1>{title}</h1>
      </DButton>
    </>
  );
}
export const DButton = styled.button`
  width: 154px;
  height: 120px;
  border-radius: 8px;
  background-color: ${primeryColor};
  color: white;
  margin: 17px 0;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  h1 {
    margin: 10px;
  }
  img {
    margin: 10px;
  }
`;
