import React from "react";

function Footer(){
    var ano = new Date().getFullYear();

    return <section id="footer">
        <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="#"><i className="fa fa-facebook fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fa fa-twitter fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fa fa-instagram fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-tiktok fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fa fa-whatsapp fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="#" target="blank"><i className="fa fa-envelope fa-2x"></i></a></li>
            </ul>
        </div>
        <a href="mailto:lucassleitao1401@gmail.com">lucassleitao1401@gmail.com</a>
        <p>&copy; Desenvolvido por Lucas Leitão - {ano}</p>
    </section>
}

export default Footer;