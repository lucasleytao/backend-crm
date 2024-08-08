import React from "react";
import "./home.css";
import Navbar from "../Components/Navbar/navbar";
import ListaClientes from "../Components/ListaClientes/listaclientes";

function Home() {

    return <>
        <Navbar />  
        <div className="container-fluid titulo">
            <h1>Página de clientes</h1>
            <ListaClientes />
        </div> 
    </>
}

export default Home;