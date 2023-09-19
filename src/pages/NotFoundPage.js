
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.scss';


function NotFoundPage() {
  return (
    <div class="error400">
<h1>404</h1>
<h2>Oups! La page que vous demandez n'existe pas.</h2>
<Link className="errorLink" to="/"><span>Retourner à la page d'accueil</span></Link>
    </div>
  );
}

export default NotFoundPage;