import React from 'react';

const HeroContainer = () => {
    return (
    
        <div className = "hero-container">
            <div className='hero-elements'>
                <div className='hero-title'>
                    <h1>AyC Murillo Contructores</h1>
                </div>
                <div className='hero-desc'>
                    <p>Ofrecemos nuestros servicios especializados en construcción, mantenimiento, reparaciones, instalaciones y ornamentación.</p>
                </div>
                <div className='hero-action'>
                    <button className='btn'>Soy boton 1</button>
                    <button className='btn'>Soy boton 2</button>
                </div>
            </div>
            <div className='hero-img'>
                <img src="/images/buid.svg" />
            </div>
        </div>
    )
};

export default HeroContainer;