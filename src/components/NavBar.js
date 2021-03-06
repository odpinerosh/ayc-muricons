import React from 'react';
import NavLinks from './NavLinks';
import logo from '../assets/AlPunto_block.svg';
import whats from '../assets/whatsapp.svg';
import './styles/NavBar.css';

const NavBar = () => {

    
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
        /*menuNavBar.classList.toggle('hide-menu'); */       
        /*menuOverLay.classList.toggle('show-links');*/
    }
    
    
    
    return (
        <nav className="nav-bar">
            <div className='nav-center'>
                <div className='nav-logo-cont'>
                    <header className="nav-header">
                        <img src={logo} className="ayc-logo" alt="AyC Logo" />
                        <button aria-label="Menu" className="btn nav-btn" id="btnMenu" onClick={clickMenu}>
                            <svg className="icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" /></svg>
                        </button>
                    </header>
                    <a href="https://wa.me/+573202172911?text=Quiero%20realizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" >
                        +57 (320) 217-2911
                        <img src={whats} className="whats-logo" alt="Whatsapp Logo" />
                    </a>
                </div>
                <NavLinks padre="menu-navBar"/>
            </div>
        </nav>
    );
}
/*<img src={whats} className="whats-logo" alt="WhatsApp Logo" />
<i class="fas fa-align-justify"></i>*/
export default NavBar;