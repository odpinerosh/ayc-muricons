import React from 'react';

const Banner = (props) => {

    return (
        <section className={props.father==='App' ? 'section-banner' : 'section-banner banner-bg-blue'}>
            <h4 className={props.father==='App' ? 'banner-title' : 'banner-title banner-color-white'}>¡Cuente con nosotros!</h4>
            <p className={props.father==='App' ? 'banner-legend' : 'banner-legend banner-color-white banner-p'}>Vamos a trabajar juntos haciendo realidad sus proyectos de construcción y mantenimiento.</p>
            <a href='https://docs.google.com/forms/d/1L2qgt5XWoc4Dvs24CMhW22qKeDDuWsZgmOr3HvNt2aA/edit?usp=sharing' className='btn btn-hipster' target="_blank" rel="noopener noreferrer" className={props.father==='App' ? 'btn' : 'btn btn-hipster'}>Contacto</a>
        </section>
    );

}

export default Banner;