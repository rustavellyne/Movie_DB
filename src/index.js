import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter, HashRouter} from 'react-router-dom';
import { HashRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';


ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

