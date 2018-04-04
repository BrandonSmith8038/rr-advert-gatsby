import React from 'react'
import { Fade } from 'react-slideshow-image'

import RRLogo from '../../images/RR-Logo-New.png'
import BackOfStands from '../../images/4X8 Back Of Stands.jpg'
import AnnouncersStand from '../../images/Announcers Stand.jpg'
import AboveSpeakers from '../../images/4X8 Boards Above Speakers.jpg'
import Courtyard from '../../images/4X8 Courtyard Fence.jpg'
import ArenaBanners from '../../images/Arena Banners.jpg'
import BuckingChutes from '../../images/Bucking Chutes.jpg'
import ReturnGate from '../../images/Return Gate.jpg'
import Stage from '../../images/RoadRunner Stage.jpg'

const images = [
  AboveSpeakers,
  BackOfStands,
  AnnouncersStand,
  Courtyard,
  ArenaBanners,
  BuckingChutes,
  ReturnGate,
  Stage,
]

export default () => {
  return (
    // Hero Section
    <section id="hero">
      <Fade images={images} duration={5000} transitionDuration={1000} />
    </section>
  )
}
