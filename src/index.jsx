import React from 'react';
import ReactDOM from 'react-dom';
import ProductStore from '../src/containers/parentApp';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom"

ReactDOM.render(<ProductStore/>, document.getElementById('root'));   
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();