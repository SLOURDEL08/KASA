import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="App-header">
      <img width="1000px" height="200px" className="logo-main" src="logomain.png" alt="" />
      <nav>
        <ul className="nav-links">
          <li><Link className="linked-li" to="/">Accueil</Link></li>
          <li><Link className="linked-li" to="/a-propos">A propos</Link></li> {/* Ajout de la route "A propos" */}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
