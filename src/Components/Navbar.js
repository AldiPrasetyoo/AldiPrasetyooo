import React from "react";
import './CSS/custom.css'

const Navbar = () => {
  return (
    <header>
        <ul className="nav-router">
          <h1><a href="/" className="nav-link">Aldi Prasetyo</a></h1>
          <div className="navigasi">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/About" className="nav-link">About</a></li>
            <li><a href="/Contact" className="nav-link">Contact</a></li>
            <li><a href="/Gallery" className="nav-link">Gallery</a></li>
          </div>
        </ul>
    </header>
  )
}

export default Navbar;