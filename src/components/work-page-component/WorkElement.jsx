import React from 'react'

const WorkElement = ({ element, number, title, img, linkTitle, link, children, reference }) => {
  return (
    <div className={element}>
      <span className='project-number'>{number}</span>
      <div className='title'><h1>{title}</h1></div>
      <div className='photo'><img src={img} alt="project" ref={reference} /></div>
      <div className='description'>{children}</div>
      <div className='link'>
        <a href={link} target='_blank' rel="noopener noreferrer">{linkTitle}</a>
      </div>
    </div>
  )
}

export default WorkElement
