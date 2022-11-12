import React from 'react';
import { motion } from 'framer-motion';

import Styles from './ProjectMoon.module.css';

const ProjectMoon = () => {
    return (
        <motion.section className="content project-moon" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <section id={Styles["section-1"]}>
                <h1 id={Styles["section-1-title"]}>Project Moon</h1>
            </section>
        </motion.section>
    );
}

export default ProjectMoon;