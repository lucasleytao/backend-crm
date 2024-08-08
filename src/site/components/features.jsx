import React from "react";

function Features() {
    return <section id="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 features-box">
                    <i className="icon fa-solid fa-heart fa-3x"></i>
                    <h3>Fácil de usar</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, saepe!</p>
                </div>
                <div className="col-lg-4 features-box">
                    <i className="icon fa-solid fa-globe fa-3x"></i>
                    <h3>Em qualquer lugar</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis inventore iste ipsa autem.</p>
                </div>
                <div className="col-lg-4 features-box">
                    <i className="icon fa-solid fa-sitemap fa-3x"></i>
                    <h3>Organização é tudo</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nemo ipsum, animi rem aliquid ducimus?</p>
                </div>
            </div>
        </div>
    </section>
}

export default Features;