import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./editarcliente.css";
import InputMask from "react-input-mask";

// importa os modulos necessarios do Firebase
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../BD/firebase";

// todos que utilizarem o componente poderao passar algumas propriedades por meio do parametro
// combine estados relacionados ao cliente em um unico objeto

function EditarCliente(props) {
    const [cliente, setCliente] = useState({nome: "", end: "", fone: "", email: ""});
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

    const editarCliente = async () => {
        const {nome, end, fone, email} = cliente;
        if (!nome || !fone || !end) {
            setMensagem(`Informe o ${!nome ? 'nome' : !fone ? 'telefone' : 'endereço'}`);
            return;
        }
        
            try {
                await updateDoc(doc(db, 'clientes', id), {
                    ...cliente,
                    fone: fone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3'), // formatacao do fone
                });
                setSucesso("S");
            } catch (error) {
                console.error('Erro ao editar cliente:', error);
                setMensagem('Erro ao editar cliente.');
        }
    };

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
                                onChange={(e) => setCliente({...cliente, nome:e.target.value})}
                                type="text"
                                value={cliente.nome}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Endereço</label>
                            <input
                                onChange={(e) => setCliente({...cliente, end:e.target.value})}
                                type="text"
                                value={cliente.end}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefone</label>
                            <InputMask
                                mask="(99)99999-9999"
                                value={cliente.fone}
                                onChange={(e) => setCliente({...cliente, fone:e.target.value.replace(/\D/g, "")})}
                                type="tel"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email
                            </label>
                            <input
                                onChange={(e) => setCliente({...cliente, email:e.target.value})}
                                type="email"
                                value={cliente.email}
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