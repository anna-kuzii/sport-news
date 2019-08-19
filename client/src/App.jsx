import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import './App.scss';
import { history } from './_helpers';
import { Register } from "./components/Register";



 export class App extends Component {
    render() {
        return (
            <div>
                <Router history = {history}>
                    <Route path="/register" component={Register}/>
                    <Route path="/login"/>
                </Router>
            </div>
        )
    }
}

