import React from 'react'
import home from '../../assets/home.png'
import folder from '../../assets/folder.png'
import document from '../../assets/document.png'
import './sidenav.css'

const Sidenav = () => {
  return (
    <div className="sidenavContainer">
      <div className="menuContainer">
        <img src={home} alt="" className="menuIcons" />
        <img src={document} alt="" className="menuIcons folderIcon" />
        <img src={folder} alt="" className="menuIcons folderIcon" />
      </div>
    </div>
  );
}

export default Sidenav