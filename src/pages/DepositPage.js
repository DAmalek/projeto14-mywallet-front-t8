import styled from "styled-components";
import Header from "../components/Header";
import React, { useContext, useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export default function DepositPage() {
  const [form, setForm] = useState({
    valor: "",
    descricao: "",
  });
  const {userToken, setUserToken, userNome, setUserNome} = useContext(UserContext);
  
  
  function newDeposit() {
    const config = { headers: { Authorization: `Bearer ${userToken}` } };
    console.log(userToken)
    axios.post(`${BASE_URL}/deposit`, form, config)
        .then((res) => {
            console.log('deu bom"', res);
        })
        .catch((err) => {
            alert(err.response.data.message);
        })
  }
  return (
    <>
      <Container>
        <Header title={"Nova entrada"} link={"/wallet"} />
        <DepForm onSubmit={newDeposit}>
          <Input
            name="valor"
            value={form.valor}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type=""
            placeholder="Valor"
          />
          <Input
            name="descricao"
            value={form.descricao}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type="text"
            placeholder="Descrição"
          />
          <Button>Salvar Entrada</Button>
        </DepForm>
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
`;
const DepForm = styled.form`
  display: flex;
  flex-direction: column;
`;
