import React, { useState, createContext } from "react";

// contexto de autenticacao
const AuthContext = createContext({});

// provedor de dados para quem acessar esse contexto
function AuthProvider(props) {
    let isLogado = localStorage.getItem('logado');

    const [logado, setLogado] = useState(isLogado === 'S');

    return (
        <AuthContext.Provider value={{ logado, setLogado }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };

// import React, { useState } from "react";

// // contexto de autenticacao
// const AuthContext = React.createContext({});

// // provedor de dados para quem acessar esse contexto
// function AuthProvider(props) {

//     let isLogado = localStorage.setItem('logado');

//     const [logado, setLogado] = useState(isLogado === 'S' ? true : false); // informacao booleana verifica se esta logado ou nao

//     return (
//         <AuthContext.Provider value={{ logado, setLogado }}>
//             {props.children}
//         </AuthContext.Provider>
//     )
// }

// export { AuthContext, AuthProvider };