import React from 'react';
import './Modal.css'

const Modal = (props) => (
    <div className='Modal'>
        <div className="ModalClose" onClick={props.click} >
            <span className="ModalX">&times;</span>
        </div>
        {props.children}
    </div>
)

export default Modal;