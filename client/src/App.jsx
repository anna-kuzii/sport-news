import React from 'react';
import './App.scss';
import {Register} from "./components/Register";
import {Login} from "./components/Login";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () =>
    <Router>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
    </Router>;

export default App;
