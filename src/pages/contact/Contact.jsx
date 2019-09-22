import React, { Component } from 'react'

import PageTitle from '../../components/page-title/PageTitle';

import './contact.styles.scss'
import SocialBar from '../../components/social/SocialBar';

const encode = (data) => {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
      formData.append(key, data[key])
  }

  return formData;
}

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    fetch("/", {
        method: "POST",
        body: encode({ "form-name": form.getAttribute("name"), ...this.state })
    })
        .then(() => alert("Success!"))
        .then(() => this.setState({ name: '', email: '', message: ''}))
        .catch(error => alert(error))
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { match } = this.props;
    const { name, email, message } = this.state;
    return (
      <div className='contact-page'>
        <PageTitle location={match} title={match.url.substring(1).toUpperCase()} />
        <div className='contact-container'>
          <h1>CONTACT</h1>
          <p>If you'd like to make an enquiry, please feel free to get in touch, and I will respond as soon as possible.</p>
          <br/>
          <form className='contact-form' name='contact' onSubmit={this.handleSubmit} >
            <div className='contact-form-element'>
              <label>NAME:</label>
              <input type="text" name='name' id='name' value={name} onChange={this.handleChange} placeholder='Your name' required />
            </div>
            <div className='contact-form-element'>
              <label>EMAIL:</label>
              <input type="email" name='email' id='email' value={email} onChange={this.handleChange} placeholder='Your email' required />
            </div>
            <div className='contact-form-element'>
              <label>MESSAGE:</label>
              <textarea type="text" name='message' id='message' value={message} onChange={this.handleChange} placeholder='Your message' />
            </div>
            <div className='contact-form-button'><input type="submit" value="SEND" id="submit" /></div>
          </form>
          <br/>
          <p>If you prefer to contact me directly, send your Email to:</p>
          <p>You can also check out my résumé.</p>
        </div>
          <SocialBar mobile={true} location={match.url} />
      </div>
    )
  }
}
