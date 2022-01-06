import React from 'react';
import whats from '../assets/whatsapp.svg';
import './styles/Footer.css';

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
                    <p>2021 © AyC Murillo Constructores</p>
                    <p>Bogotá, Colombia.</p>    
                    <a href="https://odpinerosh.github.io/odph" rel="noopener noreferrer" target="_blank">{`{odph}`}</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;