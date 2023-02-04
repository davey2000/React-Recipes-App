import React, { useRef, useState } from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import SearchBar from "../searchbar/SearchBar";
import exportedImages from '../../constants/Images';
import Hamburger from "hamburger-react";;





const Navbar = () => {
    
    //const [toggleMenu, setToggleMenu] = useState(false);
    
    const [isOpen, setOpen] = useState(false)
    const ref= useRef();
    
    useClickOutside(ref, () => setOpen(false));
    
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <NavLink to="/home">
      <img className='logo' alt="logo" src={exportedImages.logo} />
      </NavLink>
        
      </div>
    <SearchBar />
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <NavLink to="/home">Home</NavLink>
        </li>
      </ul>

      {/*<NavLink to='/Cart'>
      <AiOutlineShoppingCart fontSize={34} className='cart' />
  </NavLink> */}
      

      <div className="app__navbar-smallscreen">
      
        <Hamburger duration={0.8} distance="lg" toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <div ref={ref} className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <Hamburger duration={0.8} toggled={isOpen} toggle={setOpen} /> 
      
            <ul  className="app__navbar-smallscreen_links">
              <li onClick={() => setOpen(false)}>
                <NavLink to="/home">Home</NavLink>
              </li>
            </ul>
          </div>
          
        )}
      </div>
    </nav>
  )
}

export default Navbar