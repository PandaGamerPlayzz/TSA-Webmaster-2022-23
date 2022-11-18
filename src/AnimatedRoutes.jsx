import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Page404 from './components/pages/Page404/Page404.jsx';

import { Home, Tags as HomeTags } from './components/pages/Home/Home.jsx';
import { ProjectTerra, Tags as ProjectTerraTags } from './components/pages/ProjectTerra/ProjectTerra.jsx';
import { ProjectLuna, Tags as ProjectLunaTags } from './components/pages/ProjectLuna/ProjectLuna.jsx';
import { ProjectMars, Tags as ProjectMarsTags } from './components/pages/ProjectMars/ProjectMars.jsx';

export const SearchData = [
    // Page Directories and Tags
    ["/", HomeTags],
    ["/project-terra", ProjectTerraTags],
    ["/project-luna", ProjectLunaTags],
    ["/project-mars", ProjectMarsTags],

    // Document Directories and Tags
    ["/docs/work-log.pdf", ["work", "log"]]
];

export const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={SearchData[0][0]} element={<Home />} />
                <Route path={SearchData[1][0]} element={<ProjectTerra />} />
                <Route path={SearchData[2][0]} element={<ProjectLuna />} />
                <Route path={SearchData[3][0]} element={<ProjectMars />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;