import React from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import logo from '../assets/images/logo.svg'
function SignPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cSenha: "",
  });
  const body = {
    nome: form.nome,
    email: form.email,
    senha: form.senha,
  }
  const navigate = useNavigate();
  function signRequest(e) {

    e.preventDefault();
    
      
    
    
    axios
        .post(`${BASE_URL}/sign-up`, body)
        .then((resp) => {
            console.log(resp);
            
            navigate('/')
        })
        .catch((err) => {
            alert(err)
        }) 
  }

  return (
    <>
      <Container>
        <img src={logo} alt='aa'/>
        <form onSubmit={signRequest}>
          <Input
            name="nome"
            value={form.nome}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type="text"
            placeholder="Nome"
            required
          />
          <Input
            name="email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type="email"
            placeholder="E-mail"
            required
          />
          <Input
            name="senha"
            value={form.senha}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type="password"
            placeholder="Senha"
            required
          />
          <Input
            name="cSenha"
            value={form.cSenha}
            onChange={(e) =>
              setForm({
                ...form,
                [e.target.name]: e.target.value,
              })
            }
            type="password"
            placeholder="Confirmar Senha"
            required
          />

          <Button>Cadastrar</Button>
        </form>
        <Link to="/">Já possuí uma conta? Entre</Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 050px;
  img {
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  a {
    margin-top: 20px;
    font-size: 16.6px;
    line-height: 16px;
  }
`;

export default SignPage;
