import React from 'react'
import { Link } from 'react-router-dom'

import './home.styles.scss'

const Home = () => {
  return (
    <div className='home'>
      <Link to='/'>Adrian Pop</Link>
    </div>
  )
}

export default Home
