import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div>
    {/* Header */}
    <header>
      <a href="http://www.roadrunnerrestaurantandsaloon.com/" target="_blank">
        <img
          className="header-logo"
          src="images/RR-Logo-New.png"
          alt="RoadRunner Logo"
        />>
      </a>
      <h1>Advertise At The RoadRunner Restaurant &amp; Saloon</h1>
      {/* Nav */}
      <nav className="main-nav">
        <ul>
          <li className="nav-link">
            <a href="http://roadrunnerrestaurantandsaloon.com" target="_blank">
              Home
            </a>
          </li>
          <li className="nav-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {/* End Of Nav */}
    </header>
    {/* End Of Header */}
  </div>
)

export default Header
