import React from 'react';
import './styles/SingleFeat.css';


const SingleFeat = ({title, asset, legend}) => {

    return (
        <div className='feat-container'>
            <img src={asset} alt={asset} className='feat-image' />
            <div className='feat-desc'>
                <h2><strong>{title}</strong></h2>
                <p>
                    {legend}
                </p>
            </div>
            
        </div>
    );

}

export default SingleFeat;