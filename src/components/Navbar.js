import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h3 >GetPaidNaija.com</h3>

            <ul>
                <Link to="/">
                    <li>
                        Home
                    </li>
                </Link>
                
                <Link to="/about">
                    <li>
                        About
                    </li>
                </Link>
                <Link to="/contact">
                    <li>
                        Contact
                    </li>
                </Link>
                <Link to="./faq">
                    <li>
                        FAQ   
                    </li>
                </Link>

                <Link className="btn-light" to="./login">
                    <li style={{color: "#17a2b8"}}>
                        Login
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
