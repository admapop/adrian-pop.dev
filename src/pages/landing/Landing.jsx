import React, { Component } from 'react'

import './landing.styles.scss'

export default class Landing extends Component {

  componentDidMount() {
    const script = document.createElement('script')
    script.src = '/fluid.js'
    // script.async = true
    // script.onload = () => this.scriptLoaded()

    document.body.appendChild(script)
  }

  render() {
    return (
      <div className='landing-page'>
        <canvas className='canvas'></canvas>
        <div className='landing-element'>
          <h2>Pssst. Click and drag below!</h2>
        </div>
      </div>
    )
  }
}