import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Modal from './UI/Modal/Modal';
import Backdrop from './UI/Backdrop/Backdrop';
import * as Actions from './store/actions';
import GitLink  from "./GitLink/GitLink";
import DummyText from "./DummyText/DummyText";
import  ModalContent from "./ModalContent/ModalContent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <GitLink />
                <Backdrop show={this.props.showModal} click={this.props.toggleModal} />
                <Modal
                    show={this.props.showModal}
                    click={this.props.toggleModal}>
                    <ModalContent />
                </Modal>
                <button onClick={this.props.toggleModal}>Show Modal</button>
                <DummyText />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showModal: state.showModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModal: () => dispatch({ type: Actions.TOGGLE_MODAL })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
