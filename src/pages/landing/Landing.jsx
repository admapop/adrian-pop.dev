import React, { Component } from 'react'
import { ShowAt } from 'react-with-breakpoints';

import './landing.styles.scss'

export default class Landing extends Component {

  componentDidMount() {
    const script = document.createElement('script')
    script.src = '/fluid.js'

    document.body.appendChild(script)
  }

  render() {
    return (
      <div className='landing-page'>
        <canvas className='canvas'></canvas>
        <div className='landing-element'>
          <ShowAt breakpoint='largeAndAbove'>
            <h2 className='desktop'>Pssst. Click and drag below!</h2>
          </ShowAt>
          <ShowAt breakpoint='mediumAndBelow'>
            <h2 className='mobile'>Pssst. Touch and drag below!</h2>
          </ShowAt>
        </div>
      </div>
    )
  }
}