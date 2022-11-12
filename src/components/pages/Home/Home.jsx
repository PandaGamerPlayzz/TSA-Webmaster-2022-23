import React from 'react';
import { motion } from 'framer-motion';

import Styles from './Home.module.css';

const Home = () => {
    return (
        <motion.section className="content home" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <section id={Styles["section-1"]}>
                <h1 id={Styles["section-1-title"]}>Project Astra</h1>
            </section>
        </motion.section>
    );
}

export default Home;