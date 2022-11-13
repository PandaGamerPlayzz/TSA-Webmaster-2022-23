import * as Scroll from 'react-scroll';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Scroll.Link to="top" spy={true} smooth={true} offset={0} duration={500} className="footer-back-to-top">BACK TO TOP</Scroll.Link>
            <section className="footer-section-1">
                <div className="footer-section-1-1">

                </div>
                <hr />
                <div className="footer-section-1-2">
                    <div>Project Astra</div>
                </div>
            </section>
            <section className="footer-section-2">
                <div className="footer-copyright"><span>© 2022-2023</span>, Project Astra</div>
            </section>
        </footer>
    );
}

export default Footer;