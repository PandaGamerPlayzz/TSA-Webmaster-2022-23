import { motion } from 'framer-motion';

import Section1 from './Home.Section1.jsx';

const Home = () => {
    return (
        <motion.section className="content home">
           <Section1 />
        </motion.section>
    );
}

export default Home;