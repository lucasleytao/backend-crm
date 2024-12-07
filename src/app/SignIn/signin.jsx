import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";

import { auth } from "../BD/firebase"; // importa a autenticacao configurada
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signUp } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    //validacao de dados // evita consumo desnecessario de endpoint no firebase



    async function cadastrarUser() {
        setMensagem("");

        if (nome.length === 0 || !sobrenome || !email || !senha) {
            setMensagem('Preencha todos os campos');
            return;
        }
        console.log(nome, sobrenome, email, senha)

        await signUp(nome, sobrenome, email, senha)
            .then(() => {
                // limpar campos apos sucesso
                setNome("");
                setSobrenome("");
                setEmail("");
                setSenha("");
                alert("Usuário criado com sucesso!");
            })
           .catch((error) => { //devolve um objeto
                if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    setMensagem("A senha deve possuir pelo menos 6 caracteres.");
                } else if (error.message === 'Firebase: Error (auth/network-request-failed).') {
                    setMensagem("Email já está em uso ou não é válido!");
                } else {
                    setMensagem(`${error.message}`); //seta a mensagem do objeto
                }
            });
        navigate('/',  { state: { email } })
    }

    // forma mais verbosa

    function AltNome(event) {
        setNome(event.target.value);
    }

    function AltSobrenome(event) {
        setSobrenome(event.target.value);
    }

    // forma menos verbosa

    // arrow function (funcoes de seta) : geralmente utilizada para funcoes anonimas ou sem nome atribuido

    // const soma = function(v1){
    //     return v1 + 10
    // }

    //console.log(soma(100)) // onde v1 = 100

    // const soma = v1 =>  v1 + 10 //funcao anonima com paramentro v1 que retorna v1 + 10 // 110

    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img
                className="mb-4"
                src="/img/logo.JPG"
                alt="" height="50"
                style={{ borderRadius: 18 }}
            />
            <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

            <div className="form-floating">
                <input onChange={AltNome} value={nome} type="text" className="form-control" id="floatingInputName" placeholder="Nome" />
                <label htmlFor="floatingInput">Nome</label>
            </div>

            <div onChange={AltSobrenome} className="form-floating">
                <input value={sobrenome} type="text" className="form-control" id="floatingInputSurname" placeholder="Sobrenome" />
                <label htmlFor="floatingInput">Sobrenome</label>
            </div>

            <div className="form-floating">
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="floatingInput" placeholder="Email" />
                <label htmlFor="floatingInput">Email</label>
            </div>

            <div className="form-floating">
                <input onChange={(e) => setSenha(e.target.value)} value={senha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                <label htmlFor="floatingPassword">Senha</label>
            </div>

            <button onClick={cadastrarUser} className="btn btn-primary w-100 py-2" type="button">Criar Conta</button>

            {
                mensagem.length > 0 ?
                    <div className="alert alert-danger mt-2" role="alert">
                        {mensagem}
                    </div>
                    : null
            }

            <div className="login-links mt-5">
                <Link to="/app">Já tenho uma conta.</Link>
            </div>

            <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Lucas Leitão</p>
        </form>
    </div>
}

export default SignIn;