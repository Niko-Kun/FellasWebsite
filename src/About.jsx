import Card from './Card.jsx'
import SpagnoIMG from './assets/andreaSpagno.jpg'
import NinoIMG from './assets/ninoRusso.jpg'
import FerdIMG from './assets/ferdPacileo.jpg'
import DiegoIMG from './assets/diegoEspo.jpg'
import NikoIMG from './assets/nikoAmabile.jpg'
import GragnaIMG from './assets/francescoGragna.jpg'
import LixIMG from './assets/lucianoLix.jpg'
import TonyIMG from './assets/tonyTre.jpg'
import StefanoIMG from './assets/stefanoFella.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function About() {

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <>
            <div className="gradient-box" id="about">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ color: "white" }}>L'ordine dei Fellas</h1>
                </motion.div>
                <div className="outside-box">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        <Card image={SpagnoIMG} name="Andrea Spagnoletti" number="#001" desc="Ciao sono Spango e sono un regista con i baffi" />
                        <Card image={LixIMG} name="Luciano Lix" number="#002" desc="Faccio nella fella ogni giorno. Fellas OG" />
                        <Card image={FerdIMG} name="Ferdinando Pacileo" number="#003" desc="Fatt a barb che ce l'hai pure aret e rin" />
                        <Card image={GragnaIMG} name="Francesco Gragna" number="#004" desc="Mi faccio Pozzuoli-Pianura a piedi ubriaco" />
                        <Card image={NinoIMG} name="Nino Russolillo" number="#005" desc="&quot;Fai il bravo e dici la verità altrimenti niente regali a Natale&quot;" />
                        <Card image={StefanoIMG} name="Stefano My Fella" number="#006" desc="Non ho idea di chi stefano my fella sia" />
                        <Card image={DiegoIMG} name="Diego Esposito" number="#007" desc="Thinking outside the boxes. ChatGPT mi fa un baffo" />
                        <Card image={NikoIMG} name="Nicolò Amabile" number="#008" desc="&quot;A me piace la fessa ma non ne ho la credenza piena&quot;" />
                        <Card image={TonyIMG} name="Tony&#179;" number="#009" desc="Ho un tumore in testa ma non voglio farmi controllare" />
                    </motion.div>
                </div >
            </div>
        </>
    );
}

export default About