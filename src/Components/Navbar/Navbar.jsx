import React from 'react'
import './Navbar.css'
import atom from '../../Assets/React-icon.svg.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={atom} alt="atom" className='atom' />
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Skills</Link>
            <Link className="desktopMenuListItem">Projects</Link>
            <Link className="desktopMenuListItem">Contact</Link>
        </div>
        <button className="desktopMenubtn">
            <img src="" alt="" className="desktopMenuImg" />Contact Me
        </button>
    </nav>
  )
}

export default Navbar;