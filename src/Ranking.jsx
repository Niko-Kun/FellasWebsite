import RankedImage from './assets/rankingBG.jpg'
import { motion } from 'framer-motion';
import React, { useEffect } from "react";

function Ranking() {
    useEffect(() => {
        const namesList = document.getElementById("names-list");
        const pointsList = document.getElementById("points-list");

        if (namesList && pointsList) {
            // Ottieni i nomi e i punti come array
            const names = Array.from(namesList.children).map(li => li.textContent);
            const points = Array.from(pointsList.children).map(li => parseInt(li.textContent));

            // Combina nomi e punti in un array di oggetti
            const combined = names.map((name, index) => ({
                name: name,
                points: points[index],
            }));

            // Ordina in base ai punti in ordine decrescente
            combined.sort((a, b) => b.points - a.points);

            // Aggiorna il DOM con l'ordine ordinato
            namesList.innerHTML = '';
            pointsList.innerHTML = '';

            combined.forEach(item => {
                const nameLi = document.createElement("li");
                nameLi.textContent = item.name;
                namesList.appendChild(nameLi);

                const pointsLi = document.createElement("li");
                pointsLi.textContent = item.points;
                pointsList.appendChild(pointsLi);
            });
        }
    }, []); // Il secondo argomento vuoto assicura che venga eseguito solo una volta al montaggio

    return (
        <>
            <div className="ranked-bg" style={{ backgroundImage: `url(${RankedImage})` }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="day-title">Ranking Fellas</h1>
                </motion.div>
            </div>
            <div className="ranking-box">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="day-title">Rank</h2>
                </motion.div>
                <div className="horizontal-div">
                    <div className="ranked-list">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <ol id="names-list">
                                <li>Spagno</li>
                                <li>Niko</li>
                                <li>Nino</li>
                                <li>Lux</li>
                                <li>Ferdinando</li>
                                <li>Tony&#179;</li>
                                <li>Diego</li>
                                <li>Gragna</li>
                                <li>My Fella</li>
                            </ol>
                        </motion.div>
                    </div>

                    <div className="ranked-points">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <ul id="points-list" className="no-markers">
                                <li>0</li> {/* Spagno */}
                                <li>0</li> {/* Niko */}
                                <li>0</li> {/* Nino */}
                                <li>0</li> {/* Lux */}
                                <li>0</li> {/* Ferdinando */}
                                <li>0</li> {/* Tony */}
                                <li>0</li> {/* Diego */}
                                <li>0</li> {/* Gragna */}
                                <li>0</li> {/* My Fella */}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ranking;