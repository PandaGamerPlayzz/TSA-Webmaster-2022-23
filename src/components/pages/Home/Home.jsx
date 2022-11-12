import React from 'react';
import { motion } from 'framer-motion';

import Styles from './Home.module.css';

const Home = () => {
    console.log(Styles)

    return (
        <motion.section className="content home">
            <motion.section id={Styles["section-1"]}>
                <motion.div className={Styles["background-image"]} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: 0.5, duration: 0.5}}></motion.div>
                <motion.h1 id={Styles["section-1-title"]} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1, duration: 0.5}}} exit={{opacity: 0, transition: {duration: 0.5}}}>Project Astra</motion.h1>
            </motion.section>
        </motion.section>
    );
}

export default Home;