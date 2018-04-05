import React from 'react'
import Link from 'gatsby-link'
import Modal from 'react-modal'
import SectionCard from '../components/SectionCard'
import Info from '../components/Info'
import Contact from '../components/Contact'
import SlideShow from '../components/SlideShow'

import sections from '../Sections/sections'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }
  openModal() {
    this.setState({ modalIsOpen: true })
  }
  renderSections() {
    return sections.map(({ section, name, price, description }) => {
      return (
        <SectionCard
          action={this.openModal}
          key={name}
          name={name}
          price={price}
          description={description}
          section={section}
        />
      )
    })
  }
  modalContent(e.target) {
    console.log
    return (
      <div>
        <h1 className="modal-title">{name}</h1>
        <p className="modal-price">{price}</p>
        <div className="modal-pic">
          <img src="" />
        </div>
        <p className="modal-desc">{description}</p>
      </div>
    )
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="top-section">
            <SlideShow />
            {this.renderSections()}
          </div>
          <Info />
          <Contact />
          <Modal
            isOpen={this.state.modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {this.modalContent(e)}
          </Modal>
        </div>
      </div>
    )
  }
}

export default IndexPage
