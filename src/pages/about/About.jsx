import React from 'react'

import PageTitle from '../../components/page-title/PageTitle';

import './about.styles.scss'

const About = ({match}) => {
  return (
    <div className='about-page'>
      <PageTitle location={match} title={match.url.substring(1).toUpperCase()} />
      <h2>ABOUT ME</h2>
      <p>Hi, I'm Adrian!</p>
      <p>I'm an aspiring web developer based in Milan, Italy.</p>
      <p>I am interested in IT and everything even remotely related to it.</p>
    </div>
  )
}

export default About
