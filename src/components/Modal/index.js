import React from 'react'
import Modal from 'react-modal'

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

class CardModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalIsOpen: true,
    }
    //this.openModal = this.openModal.bind(this)
  }

  openModal() {
    setState({ modalIsOpen: true })
  }

  render() {
    return (
      // Modal
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 class="modal-title">title</h1>
        <p class="modal-price">price</p>
        <div class="modal-pic">
          <img src="" />
        </div>
        <p class="modal-desc">description</p>
      </Modal>
    )
  }
}
export default CardModal
