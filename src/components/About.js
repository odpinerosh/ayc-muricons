import React from 'react';
import Banner from './Banner';
import NavBar from './NavBar';
import OverLay from './OverLay';
import Footer from './Footer';
import './styles/About.css';

const About = () => {

    return (
        <React.Fragment>
            <OverLay />
            <NavBar />
            <section className='section-about'>
                <h4 className='about-title'>¿Quiénes somos?</h4>
                <p>AyC Murillo Constructores es una empresa colombiana creada con el objetivo de ayudar a sus clientes a hacer realidad sus proyectos de construcción y mejoras en su hogar. Nuestra organización trabaja con altos estándares de calidad aplicando siempre las normas técnicas vigentes en el país.</p>
                <p>Contamos con personal capacitado para realizar cada proyecto respetando siempre nuestro compromiso de realizar un trabajo de resultados satisfactorios para nuestros clientes con precio justo, respetando el cronograma y los estándares de calidad requeridos.</p>
                <Banner father='About'/>
            </section>
            <Footer />
        </React.Fragment>
    );
}

export default About;