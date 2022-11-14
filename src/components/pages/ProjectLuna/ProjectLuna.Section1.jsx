import { motion } from 'framer-motion';

import Styles from './ProjectLuna.module.css';

export const Section1 = () => {
    return (
        <motion.section id={Styles["section-1"]}>
            <motion.div className={`background-image ${Styles["background-image"]}`} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: 0.25, duration: 0.5}}></motion.div>
            <motion.h1 id={Styles["section-1-title"]} initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1, duration: 0.5}}} exit={{opacity: 0, transition: {duration: 0.5}}}>Project Luna</motion.h1>
        </motion.section>
    );
}

export default Section1;