import { motion } from 'framer-motion';

import Section1 from './ProjectLuna.Section1.jsx';

export const Tags = ["moon", "luna"];

export const ProjectLuna = () => {
    return (
        <motion.section className="content project-luna">
            <Section1 />
        </motion.section>
    );
}

export default ProjectLuna;