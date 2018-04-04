import React from 'react'

import closeModal from '../../functions/closeModal'

export default () => (
  // Modal
  <div className="modal" onClick={closeModal}>
    <div className="modal-content">
      <span className="closeBtn" onClick={closeModal}>
        &times;
      </span>
      <div id="modal-body" />
    </div>
  </div>
)
