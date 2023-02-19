import React, { useState } from 'react'
import '../styles/Navbar.css'
const Navbar = () => {
  const [set, get] = useState(false)
  const toggled = () => {
    get(set => !set)
  }
  let toggle = set ? ' collapse' : '';
  return (
    <div>
      <div className={`wrapper${toggle}`}>

        <div className="top_navbar">
          <div onClick={toggled} className="hamburger">
          <i className="fa-solid fa-bars"></i>
          </div>
          <div className="top_menu">
            <div className="logo">
              MZ  <span className="developer"> DEVEL<i className="fa-solid fa-face-smile"></i>PER</span>
            </div>
            <ul>
              <li><a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a></li>
              <li><a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a></li>
              <li><a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a></li>
            </ul>
          </div>
        </div>

        <div className="sidebar">
          <ul>
            <li><a href="#">
              <span className="icon"><i className="fa-solid fa-house"></i></span>
              <span className="title">Home</span>
            </a></li>
            <li><a href="#">
              <span className="icon"><i className="fa-solid fa-user"></i></span>
              <span className="title">About</span>
            </a></li>
            <li><a href="#">
              <span className="icon"><i className="fa-solid fa-screwdriver-wrench"></i></span>
              <span className="title">Skills</span>
            </a></li>
            <li><a href="#">
              <span className="icon"><i className="fa-brands fa-servicestack"></i></span>
              <span className="title">Services</span>
            </a></li>
            <li><a href="#" className="active">
              <span className="icon"><i className="fas fa-blog"></i></span>
              <span className="title">Blogs</span>
            </a></li>
            <li><a href="#">
              <span className="icon"><i className="fa-solid fa-phone"></i></span>
              <span className="title">Contact</span>
            </a></li>

          </ul>
        </div >

      </div >
    </div>
  )
}

export default Navbar
