import React, { useContext, useEffect,useState } from "react";
import styled from "styled-components";
import DepositButton from "../components/DepositButton";
import Header from "../components/Header";
import mais from "../assets/images/deposito.svg";
import menos from "../assets/images/saque.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

export default function WalletPage() {
  const navigate = useNavigate();
  const { userToken, setUserToken, userNome, setUserNome } =
    useContext(UserContext);

  const [moves, setMoves] = useState([]);
  console.log(moves)
  const [refresh, setRefresh] = useState(true)
  useEffect(() => {
    axios
      .get(`${BASE_URL}/wallet`, {
      headers: { Authorization: `Bearer ${userToken}` },
    })
      .then(res => {
        setMoves(res)
        setRefresh(!refresh)
      })
      .catch((err) =>{
        console.log(err.response.data)
      })
  }, []);

  return (
    <>
      <Container>
        <Header title={`coleeeee,${userNome}`} link={"/"} />
        <DisplayC></DisplayC>
        <Container2>
          <Link to="/deposit">
            <DepositButton img={mais} title={"Deposito"} />
          </Link>
          <Link to="/draw">
            <DepositButton img={menos} title={"saque"} />
          </Link>
        </Container2>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
  }
`;
const DisplayC = styled.div`
  width: 324px;
  height: 600px;
  border-radius: 5px;
  overflow-y: scroll;
  background-color: white;
`;
const Container2 = styled.div`
  width: 326px;
  height: 130px;
  display: flex;
  justify-content: space-between;
`;
