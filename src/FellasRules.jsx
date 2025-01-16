import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function FellasRules() {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
            <h1 className="rules">Cosa significa essere un Fellas?</h1>
            <div className="fellas-explanation">
                <p style={{ fontWeight: "bold" }}>fèllas s. m. [dal provenz. fellaus, fr. ant.
                    feuxlas, che è il lat. *fellatio]. </p>
                <p> Individuo che appartiene alla borghesia
                    più superba, di alta levatura in diversi campi
                    dello scibile umano, che non manca di
                    coraggio e bontà, e che si cura
                    indefessamente della propria barba: ua o
                    frat quello è proprio un f.; grazie niko,
                    sei un vero f.; qua dentro siamo tutti f.,
                    stai senza pensieri; un vero f. non fa 
                    nella fella; stasera vediamoci al
                    bunker dei f.; fatti non foste per viver
                    come bruti, ma per seguir virtute ed esser
                    veri f. (Dante).</p>
            </div>
        </motion.div>
    );
}

export default FellasRules