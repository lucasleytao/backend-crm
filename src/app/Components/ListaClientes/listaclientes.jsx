// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import './listaclientes.css';

// function ListaClientes(props) {
//   const navigate = useNavigate();

//   return (
//     <table className="table table-hover">
//       <thead className="table-dark">
//         <tr>
//           <th scope="col">#Id</th>
//           <th scope="col">Nome</th>
//           <th scope="col">Endereço</th>
//           <th scope="col">Telefone</th>
//           <th scope="col">Email</th>
//           <th scope="col" className="col-acao">Ações</th>

//         </tr>
//       </thead>
//       <tbody>
//         {props.arrayClientes.map(cliente => {
//           console.log("Renderizando cliente:", cliente);
//           return (
//             <tr key={cliente.id}>
//               <th scope="row">{cliente.id}</th>
//               <td>{cliente.nome}</td>
//               <td>{cliente.end}</td>
//               <td>{cliente.fone}</td>
//               <td>{cliente.email}</td>
//               <td>
//                 {/* <Link to={`/app/situacaocliente/${cliente.id}`}><i className="fa-solid fa-hand-holding-dollar icone-acao"></i></Link> */}
//                 {/* <Link to={`}`}><i className="fa-solid fa-pen-to-square icone-acao"style={{ fontFamily: 'Arial, sans-serif' }}> Editar</i></Link> */}

//                 <button type="button" className="btn btn-outline-success btn-sm me-md-2" onClick={() => navigate(`/app/editarcliente/${cliente.id}`)}><i className="fa-solid fa-pen-to-square icone-acao"></i>Editar</button>

//                 <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => props.clickDelete(cliente.id)}><i className="fa-solid fa-trash-can icone-acao"></i>Excluir</button>
//               </td>

//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default ListaClientes;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './listaclientes.css';

function ListaClientes(props) {
  const navigate = useNavigate();

  return (
    <>
      {props.arrayClientes.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Você não possui clientes cadastrados. Para adicionar um ou mais clientes, clique em <Link to="/app/novocliente">Adicionar Cliente</Link>.
        </div>
      ) : (
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
              return (
                <tr key={cliente.id}>
                  <th scope="row">{cliente.id}</th>
                  <td>{cliente.nome}</td>
                  <td>{cliente.end}</td>
                  <td>{cliente.fone}</td>
                  <td>{cliente.email}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-success btn-sm me-md-2"
                      onClick={() => navigate(`/app/editarcliente/${cliente.id}`)}
                    >
                      <i className="fa-solid fa-pen-to-square icone-acao"></i> Editar
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => props.clickDelete(cliente.id)}
                    >
                      <i className="fa-solid fa-trash-can icone-acao"></i> Excluir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ListaClientes;