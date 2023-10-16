import React from 'react';
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="container-fluid shadow-lg navbar-color">
            <div className="container">
                <nav className="navbar navbar-expand-lg p-xl-3">
                    <div className="container-fluid">
                        <a href="/" className="navbar-brand navbar-logo fs-3 fw-bold ">
                           
                            Contact Sphere
                        </a>
                        <button
                            className="navbar-toggler bg-white text-white"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <Link to={"/"}><a className="nav-link active text-white fw-bold" aria-current="page" href="/">
                                    Home
                                </a></Link>
                               <Link to={'/allContacts'}> <a className="nav-link mx-xl-5 fw-bold text-white" href="/">
                                    Contact List
                                </a></Link>
                                <a className="nav-link fw-bold text-white" href="/">
                                    Pricing
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
