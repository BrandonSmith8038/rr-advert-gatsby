import React from 'react'
import Link from 'gatsby-link'

import SectionCard from '../components/SectionCard'
import Info from '../components/Info'
import Contact from '../components/Contact'
import SlideShow from '../components/SlideShow'
import Modal from '../components/Modal'

import sections from '../Sections/sections'

const renderSections = () => {
  return sections.map(({ section, name, price, description }) => {
    return (
      <SectionCard
        key={name}
        name={name}
        price={price}
        description={description}
        section={section}
      />
    )
  })
}

const IndexPage = () => (
  <div>
    <div className="wrapper">
      <div className="top-section">
        <SlideShow />
        {renderSections()}
      </div>
      <Info />
      <Contact />
    </div>
    <Modal />
  </div>
)

export default IndexPage
