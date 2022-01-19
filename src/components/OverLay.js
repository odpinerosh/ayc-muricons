import React from "react";
import NavLinks from './NavLinks';
import './styles/OverLay.css';

const OverLay = () => {

    const getElement = (selector) => {
        const element = document.querySelector(selector)
        
        if (element) return element
            throw Error(
                `Please double check your class names, there is no ${selector} class`
            )
    }

    const clickClose = () => {
        const overLay = getElement('.over-lay');

        /*const menuNavBar = getElement('#menu-navBar');*/
        /*const menuOverLay = getElement('#menu-overLay');*/
        
        overLay.classList.toggle('ol-show');
        /*menuNavBar.classList.toggle('hide-menu');  */      
        /*menuOverLay.classList.toggle('show-links');*/
    }


    return (
        
        <div className="over-lay" id="overLay">
            <div className="ol-nav-links">
                <button aria-label="Close Menu" className="btn nav-btn" id="btnClose" onClick={clickClose}>
                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></svg>
                </button>
                <NavLinks padre="menu-overLay"/>
            </div>
        </div>
    );
}

export default OverLay;

