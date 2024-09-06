// src/components/Login.js

import React, { useState, useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../Context/auth"; //importa contexto de autenticacao
import "./login.css";

import { auth } from "../BD/firebase"; // importa a autenticacao configurada
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [sucesso, setSucesso] = useState("");
    const navigate = useNavigate(); // import hook useNavigate
    const {setLogado} = useContext(AuthContext); // chama a funcao e usa o contexto

    function LoginUsuario() {
        signInWithEmailAndPassword(auth, email, senha) //promises
        // se
            .then((firebaseUser) => {
                // Sucesso
                localStorage.setItem('logado', 'S') // persiste informacoes de login | item logado setado para sim
                setLogado(true);
                setSucesso('S'); //esconde a mensagem de alerta
                navigate('/app/home')
            })

            //senao

            .catch((error) => {
                // Erro
                localStorage.setItem('logado', 'N')
                setLogado(false);
                setSucesso("N"); //funcao igual a N
            });
    }

    function AltEmail(event) {
        setEmail(event.target.value);
    }

    function AltSenha(event) {
        setSenha(event.target.value);
    }

    return (
        <div className="d-flex align-items-center text-center form-container">
            <form className="form-signin">
                <img className="mb-4" src="img/logo.JPG" alt="" height="50" style={{ borderRadius: 18 }} />
                <h1 className="h3 mb-3 fw-normal">Login</h1>

                <div className="form-floating">
                    <input onChange={AltEmail} type="email" className="form-control" id="floatingInput" placeholder="Email" />
                    <label htmlFor="floatingInput">Email</label>
                </div>

                <div className="form-floating">
                    <input onChange={AltSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                    <label htmlFor="floatingPassword">Senha</label>
                </div>
               
            {
                // operador ternario
                
                // condicional === 1 ?(se condicao verdadeira) 'faca isso' :(senao) 'faca aquilo'

                sucesso === 'N' ?
                <div className="alert alert-danger" role="alert">
                    Email ou senha inválida!
                </div>
                : null
            }

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Lembrar-me
                    </label>
                </div>
                <button onClick={LoginUsuario} className="btn btn-primary w-100 py-2" type="button">Acessar</button>

                <div className="login-links mt-5">
                    <Link to="/app/resetsenha">Esqueci minha senha</Link>
                    <Link to="/app/signin">Criar uma conta</Link>
                </div>

                <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Lucas Leitão</p>
            </form>
        </div>
    );
}

export default Login;
