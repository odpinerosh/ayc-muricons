import React from 'react';
import SingleFeat from './SingleFeat';
import arrFeatures from '../arrFeatures';
import './styles/Features.css';

const Features = () => {

    return (
        <section className='section-features'>
            <h2 className='features-title'><strong>Servicios</strong></h2>
            <article className='features-container'>
                {
                    arrFeatures.map(option => (
                        <SingleFeat key={option.key} title={option.title} asset={option.asset} legend={option.legend} />
                    ))
                }
            </article>
        </section>
    );

}

export default Features;