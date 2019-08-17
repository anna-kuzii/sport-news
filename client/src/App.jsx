import React from 'react';
import './App.scss';
import {Register} from "./components/Register";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () =>
    <Router>
        <Route path="/register" component={Register} />
    </Router>

export default App;
