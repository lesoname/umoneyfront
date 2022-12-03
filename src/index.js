import React from 'react';
import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
    <App />,
);