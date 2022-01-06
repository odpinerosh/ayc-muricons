import React from "react";
import { Link } from "react-router-dom";
import whats from '../assets/whatsapp.svg';
import './styles/NavLinks.css';

const getElement = (selector) => {
    const element = document.querySelector(selector)
    
    if (element) return element
        throw Error(
            `Please double check your class names, there is no ${selector} class`
        )
}



const clickMenu = () => {
    const overLay = getElement('.over-lay');

    /*const menuNavBar = getElement('#menu-navBar');*/
    /*const menuOverLay = getElement('#menu-overLay');*/
    
    overLay.classList.toggle('ol-show');
    /*menuNavBar.classList.toggle('hide-menu');        */
    /*menuOverLay.classList.toggle('show-links');*/
}



const NavLinks = (props) => {

    return (
        <div className={props.padre === 'menu-overLay' ? 'nav-links show-links' : 'nav-links'} id={props.padre}> 
            <Link to="/" className="nav-link" onClick={clickMenu}>Inicio</Link>
            <a href="https://wa.me/+573202172911?text=Quiero%20realizar%20un%20proyecto" target="_blank" onClick={clickMenu} rel="noopener noreferrer" className="nav-link link-wa">
                +57 (320) 217-2911
                <img src={whats} className="whats-logo" alt="Whatsapp Logo" />
            </a>
            <Link to="/about" className="nav-link" onClick={clickMenu}>¿Quiénes somos?</Link>

            <div class="nav-link contact-link">
                <a href='https://docs.google.com/forms/d/1L2qgt5XWoc4Dvs24CMhW22qKeDDuWsZgmOr3HvNt2aA/edit?usp=sharing' className='btn btn-hipster' target="_blank" rel="noopener noreferrer" onClick={clickMenu}>Contacto</a>
            </div>
        </div>
    );
}

export default NavLinks;