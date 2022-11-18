import { motion } from 'framer-motion';

import Section1 from './ProjectTerra.Section1.jsx';

export const Tags = ["earth", "terra"];

export const ProjectTerra = () => {
    return (
        <motion.section className="content project-terra">
            <Section1 />
        </motion.section>
    );
}

export default ProjectTerra;