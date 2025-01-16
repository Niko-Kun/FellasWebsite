import Button from './Button.jsx'
import About from './About.jsx'
import FellasRules from './FellasRules.jsx'
import HeroImage from './assets/hero-image.jpg'
import SpacerIMG from './assets/spacer.jpg'
import { motion } from 'framer-motion';

function Home({ setCurrentPage }) {
    return (
        <>
            <div>
                {/* Welcome Image */}
                <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">Benvenuto Fellas</h1>
                        <Button label="Challenge del Day" onClick={() => setCurrentPage("challenge")}/>
                    </motion.div>
                </div>
            </div>

            {/* About Section */}
            <About />

            <div className="spacer" style={{ backgroundImage: `url(${SpacerIMG})`}}></div>
            <div className="rules-box">
                <FellasRules />
            </div>
            {/* Contact Section */}
            <div className="contact-box" id="contact">
                <p>Figa</p>
                <p>Figaro</p>
                <p>Ferdinando</p>
                <p>Frocio</p>
                <p>Fiona</p>
                <p>Forlì del Saas</p>
                <p>Fabor</p>
                <p>Fiori</p>
            </div>
        </>
    );
}

export default Home