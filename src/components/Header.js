import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import voltar from "../assets/images/voltar.svg";

export default function Header({ title, link }) {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Link to={link}>
      <img src={voltar} alt="voltar" />
      </Link>
      
    </StyledHeader>
  );
}
const StyledHeader = styled.div`
  width: 320px;
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  margin: 20px 0;
`;
