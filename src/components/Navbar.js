import React from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom';
import logo from '../assets/ar.jpg'
function Navbar() {
    return (
      <>
        <div className="loginBar container-fluid bg-dark d-flex flex-wrap align-items-center">
            <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">
    <Link to="/" className="navbar-brand align-items-center">
      <img id="nav-logo" src={logo} alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
      <span className="nav-title">Food</span><span className="nav-title-to">er</span>
    </Link>
    </nav>
        </div>
      </>
    )
}
export default React.memo(Navbar);
