import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './app/Context/auth';
//paginas
import Site from './site/site';
import Login from './app/Login/login';
import SignIn from './app/SignIn/signin';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import NovoCliente from './app/NovoCliente/novocliente';
import EditarCliente from './app/EditarCliente/editarcliente';
import SituacaoCliente from './app/SituacaoCliente/situacaocliente';
import Produto from './app/Produto/produto';

function App() {
    const { logado } = useContext(AuthContext);

    function SecureRoute({ children }) {
        if (!logado) {
            return <Navigate to='/app' />;
        }
        return children;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Site />} />
                <Route path='/app' element={<Login />} />
                <Route path='/app/signin' element={<SignIn />} />
                <Route path='/app/resetsenha' element={<ResetSenha />} />

                <Route path='/app/home' element={<SecureRoute><Home /></SecureRoute>} />
                <Route path='/app/novocliente' element={<SecureRoute><NovoCliente /></SecureRoute>} />
                <Route path='/app/produto' element={<SecureRoute><Produto /></SecureRoute>} />
                <Route path='/app/editarcliente/:id' element={<SecureRoute><EditarCliente /></SecureRoute>} />
                <Route path='/app/situacaocliente/:id' element={<SecureRoute><SituacaoCliente /></SecureRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;