import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as Scroll from 'react-scroll';

import './Footer.css';

import Splash from '../data/Splash.json';

function randomSplash() {
    return Splash[Math.floor(Math.random() * Splash.length)]
}

const Footer = () => {
    const [ splash, setSplash ] = useState(randomSplash());
    let currentSplash = splash;

    useEffect(() => {
        const interval = setInterval(() => {
            let newSplash = randomSplash();

            if(Splash.length > 1) {
                while(newSplash === currentSplash) {
                    newSplash = randomSplash();
                }
            }

            // eslint-disable-next-line
            currentSplash = newSplash;
            
            setSplash(newSplash);
        }, 1000 * 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.footer className="footer"  initial={{opacity: 1}} animate={{opacity: 1}} exit={{opacity: 1}}>
            <Scroll.Link to="top" spy={true} smooth={true} offset={0} duration={500} className="footer-back-to-top">BACK TO TOP</Scroll.Link>
            <section className="footer-section-1">
                <div className="footer-section-1-1">
                    <h1>{splash}</h1>
                </div>
                <hr />
                <div className="footer-section-1-2">
                    <h1>Project Astra</h1>
                </div>
            </section>
            <section className="footer-section-2">
                <div className="footer-copyright"><span>© 2022-2023</span>, Project Astra</div>
            </section>
        </motion.footer>
    );
}

export default Footer;