import React from 'react'

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
  }
  render() {
    return (
      <section id="contact">
        <p>
          Please Contact Becky Mullins with any questions you have. Phone:
          <a href="tel:520-730-9746">520-730-9746</a> or Send Us A Message Below
        </p>
        <form
          id="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <input
              type="hidden"
              name="form-name"
              value="contact"
              onChange={this.handleChange}
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <label htmlFor="Message" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={this.handleChange}
          />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
        <div id="success-section" style={{ display: 'none' }}>
          <h2 className="email-success">
            {' '}
            Your Message Was Successfully Sent{' '}
          </h2>{' '}
        </div>
        <div id="error-section" style={{ display: 'none' }}>
          <h2 className="email-error">
            An Error Occurred, Please contact Becky Mullins at 520-730-9746
          </h2>
        </div>
      </section>
    )
  }
}

export default Contact
