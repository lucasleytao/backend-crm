import React from "react";

function Comments() {
    return <section id="comments">
        <div className="container">

            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, rerum. Maxime, asperiores modi?</h2>
                        <img src="img/cli1.jpg" alt="" />
                        <em>Márcio Martins - São Paulo/SP</em>
                    </div>
                    <div className="carousel-item active" data-bs-interval="5000">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, rerum. Maxime, asperiores modi?</h2>
                        <img src="img/cli1.jpg" alt="" />
                        <em>João Silva - Rio de Janeiro/RJ</em>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, rerum. Maxime, asperiores modi?</h2>
                        <img src="img/cli1.jpg" alt="" />
                        <em>Maria Clara - Fortaleza/CE</em>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
}

export default Comments;