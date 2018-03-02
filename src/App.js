import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Modal from './UI/Modal/Modal';
import Backdrop from './UI/Backdrop/Backdrop';
import * as Actions from './store/actions';
import GitLink  from "./GitLink/GitLink";
import DummyText from "./DummyText/DummyText";

class App extends Component {
    render() {
        return (
            <div className="App">
                <GitLink />
                <Backdrop show={this.props.showModal} click={this.props.toggleModal} />
                <Modal
                    show={this.props.showModal}
                    click={this.props.toggleModal}>
                    <h1>Modal Title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum incidunt amet consectetur minus explicabo aperiam recusandae ipsa voluptate et nihil deleniti, quo perferendis ipsam similique sunt natus reprehenderit exercitationem ullam?</p>
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
