import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home.jsx';
import ProjectEarth from './components/pages/ProjectEarth/ProjectEarth.jsx';
import ProjectMoon from './components/pages/ProjectMoon/ProjectMoon.jsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/project-earth' element={<ProjectEarth />} />
                <Route path='/project-moon' element={<ProjectMoon />} />
            </Routes>
        </>
    );
}

export default App;