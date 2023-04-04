import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
    return (
      <>
        <div className="container-fluid footerNav bg-dark">
  <footer className="d-flex flex-wrap align-items-center py-2">
    <p className="col-md-4 mb-0 text-light flex-fill">&copy;AR 2022</p>
    <div className="nav col-md-4 d-inline-flex flex-fill align-items-center justify-content-end link-light">
    <Link to="/menu" className="nav-link px-2 text-light">Menu</Link>
    <Link to="/" className="nav-link px-2 text-light">Home</Link>
    </div>
  </footer>
</div>
 <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="about-hotel">
 <div className="offcanvas-header">
   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
 </div>
</div>
</>
    )
}

export default React.memo(Footer);
