import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/navbar";
import ListaClientes from "../Components/ListaClientes/listaclientes";
import "./home.css";

import { collection, getDocs } from "firebase/firestore";
// importa do BD firebase
import { db } from "../BD/firebase";

function Home() {
    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');

    useEffect(() => {
        const getClientes = async () => {
            try {
                //cria uma referencia a colecao "clientes"
                const clientesCollection = collection(db, "clientes");
                //obtem os documentos da colecao
                const clientesSnapshot = await getDocs(clientesCollection);

                // Filtra os clientes com base na busca
                const clientesList = clientesSnapshot.docs
                    .filter(doc => doc.data().nome.toLowerCase().includes(busca.toLowerCase()))
                    .map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));

                setClientes(clientesList);
                console.log("Dados dos clientes obtidos do Firestore:", clientesList);
            } catch (error) {
                console.error("Erro ao buscar clientes:", error);
            }
        };
        getClientes();
    }, [busca]);

    return <>
        <Navbar />
        <div className="container-fluid titulo">
            <h1>Lista de Clientes</h1>

            <div className="row">
                <div className="col-4">
                    <Link to='/app/novocliente' className="btn btn-primary" type="button"><i className="fa-solid fa-user-plus"></i> Novo cliente</Link>
                </div>
                <div className="col-7">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input onChange={(e) => setBusca(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por nome" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
            <ListaClientes arrayClientes={clientes} />
        </div >
    </>
}

export default Home;