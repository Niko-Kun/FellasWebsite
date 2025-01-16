import AboutImage from './assets/AboutUsBG.jpg'
import Photo1IMG from './assets/fotoFellas/photo1.jpg'
import Photo2IMG from './assets/fotoFellas/photo2.jpg'
import Photo3IMG from './assets/fotoFellas/photo3.jpg'
import Photo4IMG from './assets/fotoFellas/photo4.jpg'
import Photo5IMG from './assets/fotoFellas/photo5.jpg'
import Photo6IMG from './assets/fotoFellas/photo6.jpg'
import Photo7IMG from './assets/fotoFellas/photo7.jpg'
import Photo8IMG from './assets/fotoFellas/photo8.jpg'
import Photo9IMG from './assets/fotoFellas/photo9.jpg'
import Photo10IMG from './assets/fotoFellas/photo10.jpg'
import Photo11IMG from './assets/fotoFellas/photo11.jpg'
import Photo12IMG from './assets/fotoFellas/photo12.jpg'
import Photo14IMG from './assets/fotoFellas/photo14.jpg'
import Photo15IMG from './assets/fotoFellas/photo15.jpg'
import Photo16IMG from './assets/fotoFellas/photo16.jpg'
import Photo17IMG from './assets/fotoFellas/photo17.jpg'
import Photo18IMG from './assets/fotoFellas/photo18.jpg'
import Photo19IMG from './assets/fotoFellas/photo19.jpg'
import { motion } from 'framer-motion';

function Us() {
    return (
        <>
            <div className="about-background" style={{ backgroundImage: `url(${AboutImage})` }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="day-title">Fellas, <br /> come non li avete mai visti prima</h1>
                </motion.div>
            </div>
            <div class="photo-gallery">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img className="photo-item" src={Photo1IMG} alt="Photo 1" />
                    <img className="photo-item" src={Photo2IMG} alt="Photo 2" />
                    <img className="photo-item" src={Photo3IMG} alt="Photo 3" />
                    <img className="photo-item" src={Photo4IMG} alt="Photo 4" />
                    <img className="photo-item" src={Photo5IMG} alt="Photo 5" />
                    <img className="photo-item" src={Photo6IMG} alt="Photo 6" />
                    <img className="photo-item" src={Photo7IMG} alt="Photo 7" />
                    <img className="photo-item" src={Photo8IMG} alt="Photo 8" />
                    <img className="photo-item" src={Photo9IMG} alt="Photo 9" />
                    <img className="photo-item" src={Photo10IMG} alt="Photo 10" />
                    <img className="photo-item" src={Photo11IMG} alt="Photo 11" />
                    <img className="photo-item" src={Photo12IMG} alt="Photo 12" />
                    <img className="photo-item" src={Photo14IMG} alt="Photo 14" />
                    <img className="photo-item" src={Photo15IMG} alt="Photo 15" />
                    <img className="photo-item" src={Photo16IMG} alt="Photo 16" />
                    <img className="photo-item" src={Photo17IMG} alt="Photo 17" />
                    <img className="photo-item" src={Photo18IMG} alt="Photo 18" />
                    <img className="photo-item" src={Photo19IMG} alt="Photo 19" />
                </motion.div>
            </div>
        </>
    );
}

export default Us