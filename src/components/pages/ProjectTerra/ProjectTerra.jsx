import React from 'react';
import { motion } from 'framer-motion';

import Styles from './ProjectTerra.module.css';

const ProjectTerra = () => {
    return (
        <motion.section className="content project-terra">
            <motion.section id={Styles["section-1"]}>
                <motion.div className={Styles["background-image"]} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: 0.25, duration: 0.5}}></motion.div>
                <motion.h1 id={Styles["section-1-title"]} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1, duration: 0.5}}} exit={{opacity: 0, transition: {duration: 0.5}}}>Project Terra</motion.h1>
            </motion.section>
        </motion.section>
    );
}

export default ProjectTerra;