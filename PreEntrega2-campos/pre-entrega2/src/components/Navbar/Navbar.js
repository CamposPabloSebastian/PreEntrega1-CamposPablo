import React from "react";
import "./Navbar.css";
import CardWidget from "../CartWidget/CardWidget";

const Navbar = () => {
    return (
        <header>
            <div className="empresa">
                <div>
                    <h1>SoloMotos</h1>
                </div>
                <nav>
                    <ul className="navbar">
                        <li href="/">Inicio</li>
                        <li href="/">Ver motos</li>
                        <li href="/">Iniciar Sesion</li>
                        <li href="/">logo</li>
                        <li><CardWidget />1</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;


