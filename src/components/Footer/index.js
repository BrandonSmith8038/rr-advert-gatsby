import React from 'react'

import DUBLogo from './img/DUB.png'
import RRLogo from './img/RR-Logo-New.png'
import WTBLogo from './img/WhereTheyBuck.png'

const Footer = () => (
  <div>
    {/* Footer */}
    <footer>
      <p className="copy">&copy; 2018 RoadRunner Restaurant &amp; Saloon</p>
      <a href="http://www.roadrunnerrestaurantandsaloon.com/" target="_blank">
        <img className="rr" src={RRLogo} alt="Road Runner Logo" />>
      </a>
      <a href="https://Wheretheybuck.com" target="_blank">
        <img className="wtb" src={WTBLogo} alt="Where They Buck Logo" />
      </a>
      <img className="dub" src={DUBLogo} alt="DUB Promotions Logo" />
    </footer>
    {/* End Of Footer */}
  </div>
)

export default Footer
