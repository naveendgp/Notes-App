import React from 'react'
import home from '../../assets/home.png'
import folder from '../../assets/folder.png'
import document from '../../assets/document.png'
import { Link } from 'react-router-dom'
import './sidenav.css'

const Sidenav = () => {
  return (
    <div className="sidenavContainer">
      <div className="menuContainer">
        <img src={home} alt="" className="menuIcons" />
        <img src={document} alt="" className="menuIcons folderIcon" />

        <Link to='/notes' >
          <img src={folder} alt="" className="menuIcons folderIcon" />
        </Link>
      </div>
    </div>
  );
}

export default Sidenav