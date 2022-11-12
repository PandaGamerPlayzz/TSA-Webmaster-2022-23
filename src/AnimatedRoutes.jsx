import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './components/pages/Home/Home.jsx';
import ProjectTerra from './components/pages/ProjectTerra/ProjectTerra.jsx';
import ProjectLuna from './components/pages/ProjectLuna/ProjectLuna.jsx';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/project-terra" element={<ProjectTerra />} />
                <Route path="/project-luna" element={<ProjectLuna />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;