import React from 'react';
import { Router, Route } from 'react-router-dom';

import './App.scss';

import { history } from './_helpers';
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword"
import { DesktopMenu } from "./components/Menu/DesktopMenu"


const App = () =>

    <Router history = {history}>
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
        <Route path="/forgotpassword" component={ ForgotPassword } />
        <Route path="/menu" component={ DesktopMenu } />
    </Router>;

export default App;