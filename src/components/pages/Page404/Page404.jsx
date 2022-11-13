import { motion } from 'framer-motion';

import Styles from './Page404.module.css';

const Page404 = () => {
    return (
        <motion.section className="content error-404">
            <motion.section id={Styles["section-1"]}>
                <motion.div className={Styles["background-image"]} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay: 0.25, duration: 0.5}}></motion.div>
                <motion.h1 id={Styles["section-1-title"]}>Error 404</motion.h1>
            </motion.section>
        </motion.section>
    );
}

export default Page404;