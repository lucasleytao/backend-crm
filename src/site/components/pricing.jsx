import React from "react";

function Pricing() {
    return <section id="pricing">
        <div className="container">
            <div className="row text-center">
                <div className="titulo">
                    <h1>Planos e Preços</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, impedit?</p>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h1>Free</h1>
                        </div>
                        <div className="card-body">
                            <h2>R$ 0,00 /mês</h2>
                            <p>Até 50 clientes</p>
                            <p>Acesso ao centro de ajuda</p>
                            <button className="btn btn-lg btn-outline-primary">Cadastre-se gratuitamente</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h1>Pro</h1>
                        </div>
                        <div className="card-body">
                            <h2>R$ 49,90 /mês</h2>
                            <p>Até 200 clientes</p>
                            <p>Suporte por email</p>
                            <button className="btn btn-lg btn-primary">Acessar agora</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card border-primary">
                        <div className="card-header text-bg-primary">
                            <h1>Premium</h1>
                        </div>
                        <div className="card-body">
                            <h2>R$ 99,90 /mês</h2>
                            <p>Clientes ilimitados</p>
                            <p>Suporte por telefone</p>
                            <button className="btn btn-lg btn-outline-primary">Contate-nos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
}

export default Pricing;