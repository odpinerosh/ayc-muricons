import React from 'react';
import BuildSvg from '../assets/build.svg';

const HeroContainer = () => {
    return (
    
        <div className = "hero-container">
            <div>
                <div className='hero-img'>
                    <img src={BuildSvg} alt=""/>
                </div>
                <div className='hero-elements'>
                    <div className='hero-title'>
                        <h1>AyC Murillo Contructores</h1>
                    </div>
                    <div className='hero-desc'>
                        <p>Ofrecemos nuestros servicios especializados en construcción, mantenimiento, reparaciones, instalaciones y ornamentación.</p>
                    </div>
                    <div className='hero-action'>
                    
                        <a href='' className='btn'>Más información</a>
                    
                        <a href='' className='btn btn-hipster'>Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroContainer;