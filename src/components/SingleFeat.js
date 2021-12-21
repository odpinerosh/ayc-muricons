import React from 'react';

const SingleFeat = ({title, legend}) => {

    return (
        <div className='feat-container'>
            
            <h5><strong>{title}</strong></h5>
            <p>
                {legend}
            </p>
            <a href='#' className='btn btn-hipster'>Ver más</a>
        </div>
    );

}

export default SingleFeat;