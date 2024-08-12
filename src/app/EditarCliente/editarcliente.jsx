import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./editarcliente.css";
import InputMask from "react-input-mask";

// importa os modulos necessarios do Firebase
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../BD/firebase";

// todos que utilizarem o componente poderao passar algumas propriedades por meio do parametro
function EditarCliente(props) {
    // combine estados relacionados ao cliente em um unico objeto
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
                            <Link to="/app/home" type="button" className="btn btn-outline-primary btn-acao">
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

// import React, { useState, useEffect } from "react";
// import Navbar from "../Components/Navbar/navbar";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import "./editarcliente.css";
// import InputMask from "react-input-mask";

// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../BD/firebase";

// function EditarCliente(props) {
//     const [cliente, setCliente] = useState({ nome: "", end: "", fone: "", email: "" });
//     const [mensagem, setMensagem] = useState("");
//     const [sucesso, setSucesso] = useState("");
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         const fetchClienteData = async () => {
//             try {
//                 const docSnap = await getDoc(doc(db, 'clientes', id));
//                 if (docSnap.exists()) {
//                     setCliente(docSnap.data());
//                 } else {
//                     setMensagem('Nenhum documento encontrado!');
//                 }
//             } catch (error) {
//                 console.error('Erro ao buscar dados do cliente:', error);
//                 setMensagem('Erro ao carregar dados do cliente.');
//             }
//         };

//         fetchClienteData();
//     }, [id]);

//     const editarCliente = async () => {
//         const { nome, end, fone, email } = cliente;
//         if (!nome || !fone || !end) {
//             setMensagem(`Informe o ${!nome ? 'nome' : !fone ? 'telefone' : 'endereço'}`);
//             return;
//         }

//         try {
//             await updateDoc(doc(db, 'clientes', id), {
//                 ...cliente,
//                 fone: fone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3')
//             });
//             setSucesso("S");
//         } catch (error) {
//             console.error('Erro ao editar cliente:', error);
//             setMensagem('Erro ao editar cliente.');
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setCliente(prev => ({ ...prev, [name]: name === 'fone' ? value.replace(/\D/g, "") : value }));
//     };

//     const campos = [
//         { name: "nome", label: "Nome", type: "text" },
//         { name: "end", label: "Endereço", type: "text" },
//         { name: "fone", label: "Telefone", type: "tel", mask: "(99)99999-9999" },
//         { name: "email", label: "Email", type: "email" }
//     ];

//     return (
//         <>
//             <Navbar />
//             <div className="container-fluid titulo">
//                 <div className="offset-lg-3 col-lg-6">
//                     <h1>Editar Cliente</h1>
//                     <form>
//                         <div className="mb-3">
//                             <label className="form-label">Código</label>
//                             <input type="text" value={id} className="form-control" disabled />
//                         </div>
//                         {campos.map(({ name, label, type, mask }) => (
//                             <div key={name} className="mb-3">
//                                 <label className="form-label">{label}</label>
//                                 {mask ? (
//                                     <InputMask
//                                         mask={mask}
//                                         name={name}
//                                         value={cliente[name]}
//                                         onChange={handleChange}
//                                         type={type}
//                                         className="form-control"
//                                     />
//                                 ) : (
//                                     <input
//                                         name={name}
//                                         onChange={handleChange}
//                                         type={type}
//                                         value={cliente[name]}
//                                         className="form-control"
//                                     />
//                                 )}
//                             </div>
//                         ))}
//                         <div className="">
//                             <Link to="/app/home" type="button" className="btn btn-outline-primary btn-acao">
//                                 Cancelar
//                             </Link>
//                             <button
//                                 onClick={editarCliente}
//                                 type="button"
//                                 className="btn btn-primary btn-acao"
//                             >
//                                 Salvar
//                             </button>
//                         </div>
//                         {mensagem.length > 0 && (
//                             <div className="alert alert-danger mt-2" role="alert">
//                                 {mensagem}
//                             </div>
//                         )}
//                         {sucesso === "S" && navigate("/app/home")}
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default EditarCliente;

// import React, { useState, useEffect } from "react";
// import Navbar from "../Components/Navbar/navbar";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import "./editarcliente.css";
// import InputMask from "react-input-mask";

// // importa os modulos necessarios do Firebase
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db } from "../BD/firebase";

// // todos que utilizarem o componente poderao passar algumas propriedades por meio do parametro
// function EditarCliente(props) {
//     const [nome, setNome] = useState("");
//     const [end, setEndereco] = useState("");
//     const [fone, setFone] = useState("");
//     const [email, setEmail] = useState("");
//     const [mensagem, setMensagem] = useState("");
//     const [sucesso, setSucesso] = useState("");
//     const navigate = useNavigate();
//     const { id } = useParams();

// // useEffect: quando a pagina e aberta dispara a funcao
// // primeiro paramentro: funcao que sera executada e segundo paramentro: quando que a funcao sera disparada

//     useEffect(() => {
//         const fetchClienteData = async () => {
//             try {
//                 const docRef = doc(db, 'clientes', id);
//                 const docSnap = await getDoc(docRef);

//                 if (docSnap.exists()) {
//                     const data = docSnap.data();
//                     setNome(data.nome);
//                     setEndereco(data.end);
//                     setFone(data.fone);
//                     setEmail(data.email);
//                 } else {
//                     console.log('Nenhum documento encontrado!');
//                 }
//             } catch (error) {
//                 console.error('Erro ao buscar dados do cliente:', error.message);
//                 setMensagem('Erro ao carregar dados do cliente.');
//             }
//         };

//         fetchClienteData();
//     }, [id]);

//     const editarCliente = async () => {
//         if (nome.length === 0) {
//             setMensagem("Informe o nome");
//         } else if (fone.length === 0) {
//             setMensagem("Informe o telefone");
//         } else if (end.length === 0) {
//             setMensagem("Informe o endereço");
//         }
//         else {
//             try {
//                 const docRef = doc(db, 'clientes', id);
//                 await updateDoc(docRef, {
//                     nome,
//                     end,
//                     fone: fone.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3'), // formatacao do fone
//                     email
//                 });
//                 setSucesso("S");
//             } catch (error) {
//                 console.error('Erro ao editar cliente:', error.message);
//                 setMensagem('Erro ao editar cliente.');
//             }
//         }
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="container-fluid titulo">
//                 <div className="offset-lg-3 col-lg-6">
//                     <h1>Editar Cliente</h1>
//                     <form>
//                         <div className="mb-3">
//                             <label className="form-label">Código</label>
//                             <input type="text" value={id} className="form-control" disabled />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Nome</label>
//                             <input
//                                 onChange={(e) => setNome(e.target.value)}
//                                 type="text"
//                                 value={nome}
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Endereço</label>
//                             <input
//                                 onChange={(e) => setEndereco(e.target.value)}
//                                 type="text"
//                                 value={end}
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Telefone</label>
//                             <InputMask
//                                 mask="(99)99999-9999"
//                                 value={fone}
//                                 onChange={(e) => setFone(e.target.value.replace(/\D/g, ""))}
//                                 type="tel"
//                                 className="form-control"
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="exampleInputEmail1" className="form-label">
//                                 Email
//                             </label>
//                             <input
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 type="email"
//                                 value={email}
//                                 className="form-control"
//                                 id="exampleInputEmail1"
//                                 aria-describedby="emailHelp"
//                             />
//                         </div>
//                         <div className="">
//                             <Link to="/app/home" type="button" className="btn btn-outline-primary btn-acao">
//                                 Cancelar
//                             </Link>
//                             <button
//                                 onClick={editarCliente}
//                                 type="button"
//                                 className="btn btn-primary btn-acao"
//                             >
//                                 Salvar
//                             </button>
//                         </div>
//                         {mensagem.length > 0 && (
//                             <div className="alert alert-danger mt-2" role="alert">
//                                 {mensagem}
//                             </div>
//                         )}
//                         {sucesso === "S" && navigate("/app/home")}
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default EditarCliente;