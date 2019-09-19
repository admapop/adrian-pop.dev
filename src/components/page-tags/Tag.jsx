import React, { useState } from 'react'

import './tag.styles.scss'

const Tag = ({date}) => {
  const [year, setYear] = useState(new Date());

  return (
    <div className='tag'>
      {
        date 
        ? <span className='tag-date'>{year.getFullYear()}</span>
        : <span className='tag-text'>Portfolio</span>
      }
    </div>
  )
}

export default Tag
