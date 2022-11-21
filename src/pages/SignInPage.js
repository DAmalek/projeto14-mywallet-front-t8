import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export default function SignInPage() {
    const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    senha: "",
  });
  const {userToken, setUserToken, userNome, setUserNome} = useContext(UserContext);
  
    function logRequest(e){
      e.preventDefault();
      
      axios.post(`${BASE_URL}/sign-in`, form)
        ?.then((res) => {
          console.log(res.data);
          setUserToken(res.data.token)
          setUserNome(res.data.nome)
          navigate('/wallet')
        })
        .catch((err) => {
          console.log(err.response.data.message);
          alert(err.response.data.message);
        })
    }
    
    return (
        <>
          <Container>
            <img src={logo} alt="logo" />
            <form onSubmit={logRequest}>
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
              />
              <Button>ENTRAR</Button>
            </form>
            <Link to="/sign-up">
              <h3>Não possuí uma conta? Cadastre-se</h3>
            </Link>
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
      padding-bottom: 100px;
      
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
