import React from 'react'
import logo from '../assets/logo.webp'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg pe-5 ps-5 ">
  <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
    </span>
  </button>

  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul className="navbar-nav gap-4">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Our Team</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">All services</a>
          <a className="dropdown-item" href="#">Botox</a>
          <a className="dropdown-item" href="#">Cosmetic Dentistry</a>
         
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Smile Gallery</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Conatct Us</a>
      </li>
    </ul>
    
  </div>
</nav>
  )
}

export default Header
