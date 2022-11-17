import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Page404 from './components/pages/Page404/Page404.jsx';
import Home from './components/pages/Home/Home.jsx';
import ProjectTerra from './components/pages/ProjectTerra/ProjectTerra.jsx';
import ProjectLuna from './components/pages/ProjectLuna/ProjectLuna.jsx';
import ProjectMars from './components/pages/ProjectMars/ProjectMars.jsx';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/project-terra" element={<ProjectTerra />} />
                <Route path="/project-luna" element={<ProjectLuna />} />
                <Route path="/project-mars" element={<ProjectMars />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;