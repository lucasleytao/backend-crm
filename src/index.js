import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './app/Context/auth';

const root = ReactDOM.createRoot(document.getElementById('root')); //busca elemento id 'root'
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);