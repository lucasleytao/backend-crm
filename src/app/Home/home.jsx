import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/navbar";
import ListaClientes from "../Components/ListaClientes/listaclientes";
import SweetAlert from "react-bootstrap-sweetalert";
import "./home.css";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
// importa do BD firebase
import { db } from "../BD/firebase";

function Home() {
    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState('');
    const [del, setDel] = useState('');
    const [confirmar, setConfirmar] = useState(false)
    const [confirmarId, setConfirmarId] = useState('')

    async function deleteUser(id) {
        try {
            await deleteDoc(doc(db, 'clientes', id));
            setDel(id);
            setConfirmar(false)
        } catch (error) {
            console.error("Erro ao deletar cliente:", error);
        }
    }

    function confirmDeleteUser(id) {
        setConfirmarId(id) // atualiza o id que sera excluido do banco
        setConfirmar(true)
    }

    // acessa o banco de dados

    useEffect(() => {
        const getClientes = async () => {
            try {
                //cria uma referencia a colecao "clientes"
                const clientesCollection = collection(db, "clientes");
                //obtem os documentos da colecao
                const clientesSnapshot = await getDocs(clientesCollection);

                // Filtra os clientes com base na busca e monta o array de dados
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
    }, [busca, del]);

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
            <ListaClientes arrayClientes={clientes} clickDelete={confirmDeleteUser} />

{
    confirmar ? <SweetAlert // se confirmar (true) entao execute ...
    warning
    showCancel
    // showCloseButton
    confirmBtnText="Sim, excluir!"
    confirmBtnBsStyle="danger"
    cancelBtnText="Cancelar"
    cancelBtnBsStyle="light"
    title="Confirme sua ação"
    onConfirm={() => deleteUser(confirmarId)}
    onCancel={() => setConfirmar(false)}
    // focusCancelBtn
    >
    Deseja realmente excluir este cliente?
</SweetAlert> : null // senao
}

            
        </div >
    </>
}

export default Home;