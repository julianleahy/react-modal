import React, { Component } from 'react';
import './App.css';
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

export default App;
