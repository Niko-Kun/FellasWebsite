import ChallengeImage from './assets/challengeBG.jpg'
import { motion } from 'framer-motion';

function Challenge() {

    const desc = "Oggi proveremo a fare nella fica. "
    const pt = 100

    return (
        <>
            <div className="challenge-bg" style={{ backgroundImage: `url(${ChallengeImage})` }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="day-title">Challenge del Day</h1>
                </motion.div>
            </div>
            <div className="challenge-box">
            <div className="challengeTitle-box">
                <motion.div
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1 className="challenge-title">Fare nella Fella</h1>
                </motion.div>
            </div>
            <div className="challenge-desc">
                <h3>Regolamento e Spiegazione</h3>
                <p>
                    Ciao fellas!
                    <br/>
                    {desc}
                    Il primo che riesce guadagnerà {pt} punti ranked.
                    <br/>
                    <br/>
                    NON vale
                    <ul>
                        <li>Farsi la propria fidanzata</li>
                        <li>Farsi un uomo</li>
                        <li>Farsi un Fellas</li>
                        <li>Fermarsi al bacio</li>
                    </ul>
                </p>
            </div>
            </div>
        </>
    );
}

export default Challenge