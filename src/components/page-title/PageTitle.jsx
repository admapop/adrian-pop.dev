import React, { useState, useEffect } from 'react'
import posed, { PoseGroup } from 'react-pose'

import './page-title.styles.scss'

const Title = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 500,
    transition: {
      x: { type: 'spring', damping: 15 },
      default: { duration: 500 }
    }
  },
  exit: {
    x: -50,
    opacity: 0,
    transition: { duration: 150 }
  }
})


const PageTitle = ({title, location}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    return () => {
      setVisible(false)
    };
  }, [location])

  return (
    <PoseGroup>
      {
        visible &&  
        (<Title key='title' className='page-title'>
          {title}
        </Title>)
      }
    </PoseGroup>
  )
}

export default PageTitle
