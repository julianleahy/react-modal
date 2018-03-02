import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Modal from './UI/Modal/Modal';

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

export default connect(mapStateToProps)(App);
