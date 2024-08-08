import React from "react";

function Card(props) { //elemento Card com parametro props
    return <div>
        <p>Cliente: {props.id}</p>
        <h3>{props.nome}</h3>
        <p>{props.email}</p>
        <p>{props.fone}</p>
    </div>
}

export default Card;