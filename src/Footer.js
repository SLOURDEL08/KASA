import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
    <footer>
       <img width="1000px" height="200px" className="imageFooter" src="logoblanc.png" alt=""/>
       <span class="mentions">© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;