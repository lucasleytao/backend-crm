import React, { useState } from "react";
import Navbar from "../Components/Navbar/navbar";
import { Link, useNavigate } from "react-router-dom";
import "./produto.css";
import InputMask from "react-input-mask";

// Importa os módulos necessários do Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../BD/firebase";

function Produto() {
    let [produto, setNome] = useState("");
    let [valor, setEndereco] = useState("");
    let [mensagem, setMensagem] = useState("");
    let [sucesso, setSucesso] = useState("");
    const navigate = useNavigate();

    const CadastrarProduto = async () => {
        if (produto.length === 0) {
            setMensagem("Informe o produto");
        } else if (valor.length === 0) {
            setMensagem("Valor do produto");
        }
        else {
            try {

                // formata o numero de telefone antes de salvar
                // const formattedPhone = `(${fone.slice(0, 2)})${fone.slice(2, 7)}-${fone.slice(7)}`;

                await addDoc(collection(db, "compras"), {
                    produto: produto,
                    valor: valor,
                });
                setMensagem("Produto registrado!");
                setSucesso("S");
                navigate("/app/situacaocliente/:id");
            } catch (error) {
                setMensagem("Erro ao cadastrar produto: " + error.message);
                setSucesso("");
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid titulo">
                <div className="offset-lg-3 col-lg-6">
                    <h1>Informar produto</h1>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Descrição do Produto</label>
                            <input
                                onChange={(e) => setNome(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Valor</label>
                            <input
                                onChange={(e) => setEndereco(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="">
                            <Link to="/app/situacaocliente/:id" type="button" className="btn btn-outline-danger btn-acao">
                                Cancelar
                            </Link>
                            <button
                                onClick={CadastrarProduto}
                                type="button"
                                className="btn btn-success btn-acao"
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

export default Produto;