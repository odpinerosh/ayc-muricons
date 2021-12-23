import React from 'react';
import whats from '../assets/whatsapp.svg';

const Footer = () => {
    return(
        <footer className='page-footer'>
            <div className='footer-container'>
                <div className='footer-links'>
                    <a href="https://wa.me/+573202172911?text=Quiero%20realizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" className="nav-link">
                        Llámenos: +57 (320) 217-2911
                        <img src={whats} className="whats-logo" alt="Whatsapp Logo" />
                    </a>
                </div>
                <div className='footer-copy'>
                    <span>
                        2021 © AyC Murillo Constructores - Bogotá, Colombia. / 
                        <a href="https://odpinerosh.github.io/odph" target="_blank">{'{odph}'}</a>
                    </span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;