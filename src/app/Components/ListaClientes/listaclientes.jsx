import React from "react";
import { Link } from "react-router-dom";
import './listaclientes.css';

function ListaClientes(props) { 

  return (
      <table className="table table-hover">
      <thead className="table-dark">
        <tr>
          <th scope="col">#Id</th>
          <th scope="col">Nome</th>
          <th scope="col">Endereço</th>
          <th scope="col">Telefone</th>
          <th scope="col">Email</th>
          <th scope="col" className="col-acao">Ações</th>
          
        </tr>
      </thead>
      <tbody>
        {props.arrayClientes.map(cliente => {
          console.log("Renderizando cliente:", cliente);
          return (
            <tr key={cliente.id}>
              <th scope="row">{cliente.id}</th>
              <td>{cliente.nome}</td>
              <td>{cliente.end}</td>
              <td>{cliente.fone}</td>
              <td>{cliente.email}</td>
              <td>
                <Link to={`/app/situacaocliente/${cliente.id}`}><i className="fa-solid fa-hand-holding-dollar icone-acao"></i></Link>
                <Link to={`/app/editarcliente/${cliente.id}`}><i className="fa-solid fa-pen-to-square icone-acao"></i></Link>
                <Link to='#' onClick={() => props.clickDelete(cliente.id)}><i className="fa-solid fa-trash-can icone-acao red"></i></Link>
              </td>
             
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListaClientes;