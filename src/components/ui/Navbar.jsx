import React, {useState} from 'react'
import "./Navbar.css"



import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <nav>
      <Link to="/" className='title' >
        EsoTales
      </Link>
      <div className='menu' onClick={() =>{
        setMenuOpen(!menuOpen)
        
    
      }} >

        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/classes">Classes</NavLink>
        </li>
        <li>
          <NavLink to="/guides">Guides</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar