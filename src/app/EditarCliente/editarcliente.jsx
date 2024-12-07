import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Components/Navbar/navbar";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import "./editarcliente.css";
import InputMask from "react-input-mask";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../BD/firebase";
import { updateClient } from "../Api/update/update-client";
import { AuthContext } from "../Context/auth";

function EditarCliente(props) {
    const [cliente, setCliente] = useState({ nome: "", end: "", fone: "", email: "" });
    const [mensagem, setMensagem] = useState("");
    const [sucesso, setSucesso] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const [clienteData, setClienteData] = useState(null);
    const {userToken} = useContext(AuthContext)

    useEffect(() => {
        if (location.state && location.state.cliente) {
            console.log(location.state.cliente);
            setClienteData(location.state.cliente);
        }
    }, [location]);

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

    const editarCliente = async () => {
        if (clienteData) {
            const { nome, end, fone, email } = clienteData;
            if (!nome || !fone || !end) {
                setMensagem(`Informe o ${!nome ? 'nome' : !fone ? 'telefone' : 'endereço'}`);
                return;
            }

            try {
                // await updateDoc(doc(db, 'clientes', id), {
                //     ...clienteData,
                //     fone: fone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3'), // formatação do fone
                // });
                updateClient(clienteData, userToken)
                setSucesso("S");
            } catch (error) {
                console.error('Erro ao editar cliente:', error);
                setMensagem('Erro ao editar cliente.');
            }
        }
    };

    console.log(clienteData, "é isso");

    if (!clienteData) {
        return <div>Carregando...</div>; // Exibe uma mensagem de carregamento enquanto os dados não estão disponíveis.
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid titulo">
                <div className="offset-lg-3 col-lg-6">
                    <h1>Editar Cliente</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Código</label>
                            <input type="text" value={id} className="form-control" disabled />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input
                                onChange={(e) => setClienteData({ ...clienteData, nome: e.target.value })}
                                type="text"
                                value={clienteData.nome}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Endereço</label>
                            <input
                                onChange={(e) => setClienteData({ ...clienteData, end: e.target.value })}
                                type="text"
                                value={clienteData.endereco}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefone</label>
                            <InputMask
                                mask="(99)99999-9999"
                                value={clienteData.fone}
                                onChange={(e) => setClienteData({ ...clienteData, fone: e.target.value.replace(/\D/g, "") })}
                                type="tel"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input
                                onChange={(e) => setClienteData({ ...clienteData, email: e.target.value })}
                                type="email"
                                value={clienteData.email}
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="">
                            <Link to="/app/home" type="button" className="btn btn-outline-danger btn-acao">
                                Cancelar
                            </Link>
                            <button
                                onClick={editarCliente}
                                type="button"
                                className="btn btn-primary btn-acao"
                            >
                                Salvar
                            </button>
                        </div>
                        {mensagem.length > 0 && (
                            <div className="alert alert-danger mt-2" role="alert">
                                {mensagem}
                            </div>
                        )}
                        {sucesso === "S" && navigate("/app/home")}
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditarCliente;
