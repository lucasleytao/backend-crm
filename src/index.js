import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './app/Context/auth';

//conceito de jsx: mescla html e javascript

// const nome = 'Lucas';
// const snome = 'Leitao'

//map: key:value

// const estilo = {
//   color:"tomato",
//   fontSize:"30px"
// }

const root = ReactDOM.createRoot(document.getElementById('root')); //busca elemento id 'root'
root.render( //renderiza na tela
//o que sera renderizado deve estar envolvido em uma unica tag
// envolve todo a aplicacao com o provedor
  <AuthProvider>
    <App />
  </AuthProvider>
);