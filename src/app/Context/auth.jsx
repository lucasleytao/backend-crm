import React, { useState, createContext, useEffect } from "react";

// contexto que cria e armazena informacoes de autenticacao
const AuthContext = createContext({});

// provedor de dados para quem acessar esse contexto
function AuthProvider(props) {

    let isLogado = localStorage.getItem('logado');
    let token = sessionStorage.getItem('idToken');
    // variavel de estado (contexto)
    console.log("token de context", token)
    const [logado, setLogado] = useState(isLogado === 'S');
    const [userToken, setUserToken] = useState(token);
    // se usuario logado ocorre este retorno //provedor que acessa logado e funcao setLogado 
    useEffect(() => {
        // Recupera os tokens armazenados no sessionStorage
        const storedIdToken = sessionStorage.getItem("idToken");
        console.log(storedIdToken)
        if (storedIdToken) {
            setUserToken(storedIdToken);
        }
        console.log("user token",userToken)
      }, [logado]);
    return (
        <AuthContext.Provider value={{ logado, setLogado, userToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

// permite uso desse contexto
export { AuthContext, AuthProvider };