import React from 'react'

const SectionCard = props => (
  <section id={props.section}>
    <div className="card">
      <div className="title-price">
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  </section>
)

export default SectionCard
