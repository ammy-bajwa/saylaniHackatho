import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppRouter from "./routes/routes";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <AppRouter />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
