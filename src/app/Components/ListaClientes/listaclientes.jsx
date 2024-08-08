import React, { useState, useEffect } from "react";
import './listaclientes.css';
import { collection, getDocs } from "firebase/firestore";
// importa do BD firebase
import { db } from "../../BD/firebase";

function ListaClientes() {
  const [clientes, setClientes] = useState([]); // armazena os dados encontrados

  useEffect(() => { // hook que executa uma funcao
    const getClientes = async () => {
      try {

        //cria uma referencia a colecao "clientes"
        const clientesCollection = collection(db, "clientes");

        //obtem os documentos da colecao
        const querySnapshot = await getDocs(clientesCollection);

        // mapeia os documentos para um array de objetos
        const clientesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        //   nome: doc.data().nome,
        //   email: doc.data().email,
        //   end: doc.data().end,
        //   fone: doc.data().fone
        }));

        setClientes(clientesList);
        console.log("Dados dos clientes obtidos do Firestore:", clientesList);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    getClientes(); // executa funcao apos finalizar
  }, []);

  return (
      <table className="table table-hover">
      <thead className="table-dark">
        <tr>
          <th scope="col">#Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Endereço</th>
          <th scope="col">Telefone</th>
          <th scope="col">Email</th>
          
        </tr>
      </thead>
      <tbody>
        {clientes.map(cliente => {
          console.log("Renderizando cliente:", cliente);
          return (
            <tr key={cliente.id}>
              <th scope="row">{cliente.id}</th>
              <td>{cliente.nome}</td>
              <td>{cliente.end}</td>
              <td>{cliente.fone}</td>
              <td>{cliente.email}</td>
             
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListaClientes;