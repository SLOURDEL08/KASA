import React from 'react';
import { Link, useLocation } from "react-router-dom";


const Navigation = () => {
  const location = useLocation();

  return (
    <header className="App-header">
      <img width="1000px" height="200px" className="logo-main" src="logomain.png" alt="" />
      <nav>
        <ul className="nav-links">
          <li><Link className={`linked-li ${location.pathname === "/" ? "activelink" : ""}`} to="/">Accueil</Link></li>
          <li><Link className={`linked-li ${location.pathname === "/a-propos" ? "activelink" : ""}`} to="/a-propos">À propos</Link></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
