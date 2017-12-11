import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';
import './style/base.css';
import './style/main.css';
import {
  BrowserRouter,
} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
