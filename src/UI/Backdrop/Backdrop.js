import React from 'react';
import './Backdrop.css'

const Backdrop = (props) => (
    // return component when showing modal
    props.show ? <div className='Backdrop' onClick={props.click} ></div> : null       
)

export default Backdrop;