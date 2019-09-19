import React from 'react'
import './social-bar.styles.scss'



const SocialBar = () => {
  return (
    <div className='social-container'>
      <a href="https://github.com/admapop" target='_blank' rel="noopener noreferrer"><img src={require("../../assets/icons/github-logo.png")} alt="GitHub"/></a>
      <a href="https://www.linkedin.com/in/adrian-marcel-pop/" target='_blank' rel="noopener noreferrer"><img src={require("../../assets/icons/linkedin.png")} alt="LinkedIn"/></a>
    </div>
  )
}

export default SocialBar
