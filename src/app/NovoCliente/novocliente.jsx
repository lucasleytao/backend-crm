import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar/navbar";
import { Link, useNavigate } from "react-router-dom";
import "./novocliente.css";
import InputMask from "react-input-mask";

// Importa os módulos necessários do Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../BD/firebase";
import { createClient } from '../Api/post/create-client';
import { AuthContext } from "../Context/auth";


function NovoCliente() {
  let [nome, setNome] = useState("");
  let [endereco, setEndereco] = useState("");
  let [fone, setFone] = useState("");
  let [email, setEmail] = useState("");
  let [mensagem, setMensagem] = useState("");
  let [sucesso, setSucesso] = useState("");

  const {userToken} = useContext(AuthContext)

  const navigate = useNavigate();
  console.log("token add client: ", userToken)
  const CadastrarCliente = async () => {
    if (nome.length === 0) {
      setMensagem("Informe o nome");
    } else if (endereco.length === 0) {
      setMensagem("Informe o endereço");
    } else if (fone.length === 0) {
      setMensagem("Informe o telefone");
    } 
    // else if (!isValidEmail(email)) {
    //   setMensagem("Informe um email válido");
    // } 
    else {
      try {

        // formata o numero de telefone antes de salvar
      const formattedPhone = `(${fone.slice(0, 2)})${fone.slice(2, 7)}-${fone.slice(7)}`;

        // await addDoc(collection(db, "clientes"), {
        //   nome: nome,
        //   end: endereco,
        //   fone: formattedPhone,
        //   email: email,
        // });

        createClient(nome, endereco, email,formattedPhone, userToken)

        setMensagem("Cliente cadastrado com sucesso!");
        setSucesso("S");
        navigate("/app/home");
      } catch (error) {
        setMensagem("Erro ao cadastrar cliente: " + error.message);
        setSucesso("");
      }
    }
  };

//   function isValidEmail(email) {
//     // Validação de email
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
//   }

  return (
    <>
      <Navbar />
      <div className="container-fluid titulo">
        <div className="offset-lg-3 col-lg-6">
          <h1>Novo Cliente</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input
                onChange={(e) => setNome(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Endereço</label>
              <input
                onChange={(e) => setEndereco(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Telefone</label>
              <InputMask
                mask="(99)99999-9999"
                value={fone}
                onChange={(e) => setFone(e.target.value.replace(/\D/g, ""))}
                type="tel"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
              <Link to="/app/home" type="button" className="btn btn-outline-primary btn-acao">
                Cancelar
              </Link>
              <button
                onClick={CadastrarCliente}
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

export default NovoCliente;