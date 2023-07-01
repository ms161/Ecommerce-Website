import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import AuthContext from './Components/Store/Auth-Context';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Components/Store-page.jsx/CartProvider';
import { AuthenticationProvidor } from './Components/LoginPage/AuthenticationProvider';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
<AuthenticationProvidor>

<CartProvider><App /></CartProvider>
</AuthenticationProvidor>
</BrowserRouter>
</>
);

