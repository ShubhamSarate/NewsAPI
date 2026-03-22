import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand fw-bold fs-3 text-white" to="/">
          Universe Times
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link small text-light blurred" to="/general">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link small text-light blurred" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link small text-light blurred" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link small text-light blurred" to="/technology">Technology</Link>
            </li>
            <li className="nav-item"> 
              <Link className="nav-link small text-light blurred" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link small text-light blurred" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link small text-light blurred" to="/entertainment">Entertainment</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar;