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
                    <h1 className="challenge-title">{import.meta.env.VITE_ChallengeTitle}</h1>
                </motion.div>
            </div>
            <div className="challenge-desc">
                <h3>Regolamento e Spiegazione</h3>
                <p>
                    {import.meta.env.VITE_ChallengeRules}
                    <br/>
                    NON vale
                    <ul>
                        <li>{import.meta.env.ChallengeCondition1}</li>
                        <li>{import.meta.env.ChallengeCondition2}</li>
                        <li>{import.meta.env.ChallengeCondition3}</li>
                        <li>{import.meta.env.ChallengeCondition4}</li>
                        <li>{import.meta.env.ChallengeCondition5}</li>
                        <li>{import.meta.env.ChallengeCondition6}</li>
                    </ul>
                </p>
            </div>
            </div>
        </>
    );
}

export default Challenge