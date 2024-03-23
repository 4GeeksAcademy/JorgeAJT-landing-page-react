import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-white" href="#">Start Eating</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active fw-semibold text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link fw-semibold text-white-50" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link fw-semibold text-white-50" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link fw-semibold text-white-50" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;