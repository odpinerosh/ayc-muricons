import React from 'react';
import SingleFeat from './SingleFeat';
import arrFeatures from '../arrFeatures';
import './styles/Features.css';

const Features = () => {

    return (
        <section className='section-features'>
            <h2 className='features-title'>Servicios</h2>
            <div className='features-container'>
                {
                    arrFeatures.map(option => (
                        <SingleFeat title={option.title} asset={option.asset} legend={option.legend} />
                    ))
                }
            </div>
        </section>
    );

}

export default Features;