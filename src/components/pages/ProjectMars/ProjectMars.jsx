import { motion } from 'framer-motion';

import Section1 from './ProjectMars.Section1.jsx';

export const Tags = ["mars", "mārs"];

export const ProjectMars = () => {
    return (
        <motion.section className="content project-mars">
            <Section1 />
        </motion.section>
    );
}

export default ProjectMars;