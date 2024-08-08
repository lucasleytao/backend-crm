import React from "react";

function Menu() {
    return <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand" href="#">
                <img src="img/logo.jpg" alt="" height="40" style={{ borderRadius: 14 }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#banner">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#comments">Depoimentos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#pricing">Planos e Preços</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#footer">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Menu;