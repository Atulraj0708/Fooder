import React from 'react'

function CategoryBar() {
    return (
        <div className="catContainer" id="categoryBar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#Break Your Fast">BreakFast</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Time for Lunch">Lunch</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Can I Have Snacks">Snacks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Dinner">Dinner</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Burgers and Beverages">Burgers and Beverages</a>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" role="button">
            More Items
          </div>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#Pizzanians">Pizza</a></li>
            <li><a className="dropdown-item" href="#Desserts">Desserts</a></li>
            <li><a className="dropdown-item" href="#Chick and Chicken">Chicken</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default React.memo(CategoryBar)
