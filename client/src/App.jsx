import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';
import { history } from './_helpers';
import { alertActions } from './_actions';
import {Register} from "./components/Register";


class App extends Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }


    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history = {history}>
                    <Route path="/register" component={Register}/>
                    <Route path="/login"/>
                </Router>
            </div>
        )
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
