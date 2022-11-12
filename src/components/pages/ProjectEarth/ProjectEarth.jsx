import React from 'react';
import { motion } from 'framer-motion';

import Styles from './ProjectEarth.module.css';

const ProjectEarth = () => {
    return (
        <motion.section className="content project-earth" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <section id={Styles["section-1"]}>
                <h1 id={Styles["section-1-title"]}>Project Earth</h1>
            </section>
        </motion.section>
    );
}

export default ProjectEarth;