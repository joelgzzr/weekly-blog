import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

const initialData = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
    <BrowserRouter>
        <div>{renderRoutes(Routes, { initialData })}</div>
    </BrowserRouter>,
    document.querySelector('#root')
);
