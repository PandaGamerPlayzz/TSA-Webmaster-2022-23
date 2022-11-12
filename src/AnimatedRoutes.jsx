import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './components/pages/Home/Home.jsx';
import ProjectEarth from './components/pages/ProjectEarth/ProjectEarth.jsx';
import ProjectMoon from './components/pages/ProjectMoon/ProjectMoon.jsx';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/project-earth" element={<ProjectEarth />} />
                <Route path="/project-moon" element={<ProjectMoon />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;