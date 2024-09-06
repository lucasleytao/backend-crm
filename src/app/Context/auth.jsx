import React, { useState, createContext } from "react";

// contexto que cria e armazena informacoes de autenticacao
const AuthContext = createContext({});

// provedor de dados para quem acessar esse contexto
function AuthProvider(props) {

    let isLogado = localStorage.getItem('logado');
    // variavel de estado (contexto)
    const [logado, setLogado] = useState(isLogado === 'S');

    // se usuario logado ocorre este retorno //provedor que acessa logado e funcao setLogado 
    return (
        <AuthContext.Provider value={{ logado, setLogado }}>
            {props.children}
        </AuthContext.Provider>
    )
}

// permite uso desse contexto
export { AuthContext, AuthProvider };