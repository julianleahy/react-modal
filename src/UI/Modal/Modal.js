import React from 'react';
import './Modal.css'

const Modal = (props) => {
    // hide modal when state is false
    // change class to have modal appear from different directions [see css]
    let modalClass = props.show ? ['Modal'] : ['Modal', 'ModalFromTop'];

    return (
        <div className={modalClass.join(' ')}>

        <div className="ModalClose" onClick={props.click} >
            <span className="ModalX">&times;</span>
        </div>
            {props.children}
        </div>
    )
}

export default Modal;