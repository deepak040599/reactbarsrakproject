import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './pages/Login';
import Rejister from './pages/Rejister';
import Error404 from './pages/Error404';


ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/rej" element={<Rejister />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


