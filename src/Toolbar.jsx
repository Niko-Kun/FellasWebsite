import React, { useState } from 'react';

function Toolbar({ setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false); // Stato per gestire il menu
  const [isMobile, setIsMobile] = useState(false); // Stato per verificare la larghezza del viewport

  // Funzione per alternare lo stato del menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Funzione per aggiornare lo stato isMobile
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Aggiungi l'event listener per monitorare il ridimensionamento della finestra
  React.useEffect(() => {
    handleResize(); // Verifica la dimensione al momento del montaggio
    window.addEventListener('resize', handleResize); // Aggiungi l'evento per il ridimensionamento

    return () => {
      window.removeEventListener('resize', handleResize); // Rimuovi l'evento al dismontaggio
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <button onClick={() => setCurrentPage('home')}>Fellas</button>
      </div>

      {/* Hamburger Menu (visibile solo su dispositivi mobili) */}
      {isMobile && (
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
      )}

      {/* Menu di navigazione */}
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>About Us</button>
        <button onClick={() => setCurrentPage('ranking')}>Ranking</button>
      </div>
    </div>
  );
}

export default Toolbar;