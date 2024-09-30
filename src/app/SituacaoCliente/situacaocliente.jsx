import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/navbar";
import './situacaocliente.css';
import { useNavigate, useParams, Link } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../BD/firebase";

function SituacaoCliente(props) {

    const [cliente, setCliente] = useState({nome: ''})
    const [mensagem, setMensagem] = useState("");
    const [sucesso, setSucesso] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    // useEffect: quando a pagina e aberta dispara a funcao
    // primeiro paramentro: funcao que sera executada e segundo paramentro: quando que a funcao sera disparada

    useEffect(() => {
        const fetchClienteData = async () => {
            try {

                const docSnap = await getDoc(doc(db, 'clientes', id));

                if (docSnap.exists()) {
                    setCliente(docSnap.data());

                } else {
                    setMensagem('Nenhum documento encontrado!');
                }
            } catch (error) {
                console.error('Erro ao buscar dados do cliente:', error);
                setMensagem('Erro ao carregar dados do cliente.');
            }
        };

        fetchClienteData();
    }, [id]);

    return (
        <>
            <Navbar />
            <div className="container-fluid titulo">
                <div className="offset-lg-3 col-lg-6">
                    <h1>Situação Cliente</h1>
                    <form>
                        {/* <div className="mb-3">
                            <label className="form-label">Código</label>
                            <input type="text" value={id} className="form-control" disabled />
                        </div> */}
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input
                                type="text"
                                value={cliente.nome}
                                className="form-control"
                                disabled
                            />
                        </div>
                        <div className="">
              <Link to="/app/home" type="button" className="btn btn-outline-danger btn-acao">
                Voltar
              </Link>
              <Link to="/app/produto" type="button" className="btn btn-success btn-acao">
                Registrar Compra
              </Link>
              <Link to="" type="button" className="btn btn-secondary btn-acao">
                Imprimir
              </Link>
              
            </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default SituacaoCliente;
