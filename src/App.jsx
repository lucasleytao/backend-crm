import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom' //bres
//paginas
import Site from './site/site';
import Login from './app/Login/login';
import SignIn from './app/SignIn/signin';
import ResetSenha from './app/ResetSenha/resetsenha';
import Home from './app/Home/home';
import NovoCliente from './app/NovoCliente/novocliente';
import EditarCliente from './app/EditarCliente/editarcliente';

function App() {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Site/>} />
                <Route exact path='/app' element={<Login/>} />
                <Route exact path='/app/signin' element={<SignIn/>} />
                <Route exact path='/app/resetsenha' element={<ResetSenha/>} />
                <Route exact path='/app/home' element={<Home/>} />
                <Route exact path='/app/novocliente' element={<NovoCliente/>} />
                <Route exact path='/app/editarcliente/:id' element={<EditarCliente/>} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;