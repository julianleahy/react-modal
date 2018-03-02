import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Modal from './UI/Modal/Modal';
import * as Actions from './store/actions';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Modal>
                    Modal Content
                </Modal>
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
