import React, { useContext } from "react";
import "./navbar.css";
import {Link} from "react-router-dom"
import { AuthContext } from "../../Context/auth";

function Navbar() { //elemento Site com parametro props
    const {setLogado} = useContext(AuthContext)

    function Logout(){
        setLogado(false);
        localStorage.removeItem('logado');
    }

    return <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="/app/home">
                <img src="/img/logo.jpg" alt="" height="40" style={{ borderRadius: 14 }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/app/home" className="nav-link" aria-current="page" href="#">Clientes</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/app/novocliente" className="nav-link" aria-current="page" href="#">Novo cliente</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" onClick={Logout} className="nav-link" aria-current="page" href="#">Sair</Link>
                    </li>                    
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar;