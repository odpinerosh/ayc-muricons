import React from "react";

import whats from '../assets/whatsapp.svg';

const NavLinks = (props) => {

    return (
        <div className="nav-links" id={props.padre}> 
            <a href="https://wa.me/+573202172911?text=Quiero%20realizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="nav-link">
                +57 (320) 217-2911
                <img src={whats} className="whats-logo" alt="Whatsapp Logo" />
            </a>
            <a href="./about.html" className="nav-link">¿Quiénes Somos?</a>
            <a href="./tag-group.html" className="nav-link">Servicios</a>
            <div class="nav-link contact-link">
                <a href="./contact.html" className="btn">Contacto</a>
            </div>
        </div>
    );
}

export default NavLinks;