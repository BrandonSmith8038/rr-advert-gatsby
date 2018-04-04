import React from 'react'

const Contact = () => (
  // Contact
  <section id="contact">
    <p>
      Please Contact Becky Mullins with any questions you have. Phone:
      <a href="tel:520-730-9746">520-730-9746</a> or Send Us A Message Below
    </p>
    <form id="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>
      <label htmlFor="Message" />
      <textarea name="message" id="message" cols="30" rows="10" />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
    <div id="success-section" style={{ display: 'none' }}>
      <h2 className="email-success"> Your Message Was Successfully Sent </h2>{' '}
    </div>
    <div id="error-section" style={{ display: 'none' }}>
      <h2 className="email-error">
        An Error Occurred, Please contact Becky Mullins at 520-730-9746
      </h2>
    </div>
  </section>
  // End Of Contact
)

export default Contact
