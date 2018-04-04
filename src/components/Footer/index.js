import React from 'react'

const Footer = () => (
  <div>
    {/* Footer */}
    <footer>
      <p className="copy">&copy; 2018 RoadRunner Restaurant &amp; Saloon</p>
      <a href="http://www.roadrunnerrestaurantandsaloon.com/" target="_blank">
        <img
          className="rr"
          src="images/RR-Logo-New.png"
          alt="Road Runner Logo"
        />>
      </a>
      <a href="https://Wheretheybuck.com" target="_blank">
        <img
          className="wtb"
          src="images/WhereTheyBuck.png"
          alt="Where They Buck Logo"
        />
      </a>
      <img className="dub" src="images/DUB.png" alt="DUB Promotions Logo" />
    </footer>
    {/* End Of Footer */}
  </div>
)

export default Footer
