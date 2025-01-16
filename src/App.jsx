import React, { useState } from 'react';
import Toolbar from './Toolbar.jsx';
import Home from './Home.jsx';
import Ranking from './Ranking.jsx';
import Challenge from './Challenge.jsx';
import Us from './Us.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Stato per la pagina attuale

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage}/>;
      case 'about':
        return <Us />;
      case 'ranking':
        return <Ranking />;
      case 'challenge':
        return <Challenge />;
      default:
        return <Home setCurrentPage={setCurrentPage}/>;
    }
  };

  return (
    <div>
      <Toolbar setCurrentPage={setCurrentPage} /> 
      {renderPage()}
    </div>
  );
}

export default App;