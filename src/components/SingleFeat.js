import React from 'react';


const SingleFeat = ({title, asset, legend}) => {

    return (
        <div className='feat-container'>
            <img src={asset} alt={asset} />
            <h5><strong>{title}</strong></h5>
            <p>
                {legend}
            </p>
            
        </div>
    );

}

export default SingleFeat;