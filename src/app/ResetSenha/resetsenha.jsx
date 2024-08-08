import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./resetsenha.css";

import { auth } from "../BD/firebase"; // importa a autenticacao configurada
import { sendPasswordResetEmail } from "firebase/auth";

function ResetSenha() {

    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [sucesso, setSucesso] = useState("");

    function recuperarSenha() { // < quando o usuario clica no botao enviar > chama recuperarsenha
        setMensagem(''); // limpa a mensagem existente
        sendPasswordResetEmail(auth, email) // adiciona 'auth' como primeiro paramentro
            .then(() => {
                setSucesso('Email enviado com sucesso!')
            })
            .catch(error => {
                setSucesso('') // mensagem que nao quero renderizar
                setMensagem(`Erro ao enviar email: ${error.message}`) // mensagem que quero renderizar
            })
    }

    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src="/img/logo.JPG" alt="" height="50" style={{ borderRadius: 18 }} />
            <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

            <div className="form-floating">
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Email" />
                <label htmlFor="floatingInput">Informe seu email</label>
            </div>

            <button onClick={recuperarSenha} className="btn btn-primary w-100 py-2" type="button">Enviar</button>

            {
                mensagem.length > 0 ?
                    <div className="alert alert-danger mt-2" role="alert">
                        {mensagem}
                    </div>
                    : null
            }

            {
                sucesso.length > 0 ?
                    <div className="alert alert-success mt-2" role="alert">
                        {sucesso}
                    </div>
                    : null
            }

            <div className="login-links mt-3">
                <Link to="/app">Voltar para Login</Link>
            </div>

            <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Hand Tecnologia</p>
        </form>
    </div>
}

export default ResetSenha;