import React from 'react';
import './App.scss';
import Register from "./components/Register";
import {Login} from "./components/Login";
import {ForgotPassword} from "./components/ForgotPassword"
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () =>
    <Router>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/forgotpassword" component={ForgotPassword} />
    </Router>;

export default App;
