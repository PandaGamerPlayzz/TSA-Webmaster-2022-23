import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AnimatedRoutes from './AnimatedRoutes.jsx';

import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <span id="top"></span>
            <AnimatedRoutes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;