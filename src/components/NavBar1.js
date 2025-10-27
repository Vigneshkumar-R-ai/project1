import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar1.css'
const NavBar1 = () => {
  return (
    <>
     <nav>
    <NavLink id="nl" to="project1/">Home</NavLink>
    <div id='nav1'>
    <span>Tour Districts</span>
    <div id='navitems1'>
      <NavLink style={{textDecoration:"none"}} to="project1/nilgiris"><h6 >Nilgiris</h6></NavLink>
      <NavLink style={{textDecoration:"none"}}  to="project1/dindigul"><h6>Dindigul</h6></NavLink>
      <NavLink style={{textDecoration:"none"}} to="project1/madurai"><h6>Madurai</h6></NavLink>
     <NavLink style={{textDecoration:"none"}} to="project1/thanjavur"><h6>Thanjavur</h6></NavLink>
    </div>
    </div>
    {/* <NavLink id="nl" to="/population">Population</NavLink> */}
    <NavLink id="nl" to="project1/touristspots">Tourist Spots</NavLink>
    <NavLink id="nl" to="project1/about">About</NavLink>
     </nav>
    
    </>
  )
}

export default NavBar1