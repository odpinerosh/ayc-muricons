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
                        <h1>AyC Murillo Constructores</h1>
                    </div>
                    <div className='hero-desc'>
                        <p>Ofrecemos nuestros servicios especializados en construcción, mantenimiento, reparaciones, instalaciones y ornamentación.</p>
                    </div>
                    <div className='hero-action'>
                        <a href='https://docs.google.com/forms/d/1L2qgt5XWoc4Dvs24CMhW22qKeDDuWsZgmOr3HvNt2aA/edit?usp=sharing' className='btn btn-hipster' target="_blank" rel="noopener noreferrer" >Contacto</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroContainer;