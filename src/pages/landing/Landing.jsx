import React, { Component } from 'react'
import { Breakpoint } from 'react-socks'

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
          <Breakpoint desktop only>
            <h2 className='desktop'>Pssst. Click and drag below!</h2>
          </Breakpoint>
          <Breakpoint desktop down>
            <h2 className='mobile'>Pssst. Touch and drag below!</h2>
          </Breakpoint>
        </div>
      </div>
    )
  }
}