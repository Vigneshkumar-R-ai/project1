import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar1.css'
const NavBar1 = () => {
  return (
    <>
     <nav>
    <NavLink id="nl" to="/">Home</NavLink>
    <div id='nav1'>
    <span>Tour Districts</span>
    <div id='navitems1'>
      <NavLink style={{textDecoration:"none"}} to="/nilgiris"><h6 >Nilgiris</h6></NavLink>
      <NavLink style={{textDecoration:"none"}}  to="/dindigul"><h6>Dindigul</h6></NavLink>
      <NavLink style={{textDecoration:"none"}} to="/madurai"><h6>Madurai</h6></NavLink>
     <NavLink style={{textDecoration:"none"}} to="/thanjavur"><h6>Thanjavur</h6></NavLink>
    </div>
    </div>
    {/* <NavLink id="nl" to="/population">Population</NavLink> */}
    <NavLink id="nl" to="/touristspots">Tourist Spots</NavLink>
    <NavLink id="nl" to="/about">About</NavLink>
     </nav>
    
    </>
  )
}

export default NavBar1