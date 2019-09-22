import React, { useState, useEffect, useRef } from 'react'

import WorkElement from '../../components/work-page-component/WorkElement';
import PageTitle from '../../components/page-title/PageTitle';

import './work.styles.scss'

function useHover() {
  const [value, setValue] = useState(false)

  const ref = useRef(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut)
      
      return () => {
        node.removeEventListener('mouseover', handleMouseOver)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    };
  }, []) // warning saying ref.current is an unnecessary dependency

  return [ref, value]
}

const Work = ({ match }) => {
  const [hoverRef, isHovered] = useHover();
  const [hoverRef1, isHovered1] = useHover();

  return (
    <div className='work-page'>
      <PageTitle location={match} title={match.url.substring(1).toUpperCase()} />
      <div className='work-container'>
        <WorkElement element='work0' number={'00'} title={'BURGEZ - New Website'} img={isHovered ? require("../../assets/projects/BURGEZ Website22.png") : require("../../assets/projects/BURGEZ Website.jpg")} linkTitle={'Link'} link={'https://burgez.com/'} reference={hoverRef}>
          <h2>Design & Development</h2>
          <h3>August 2019</h3>
          <p>The previous website was made with WordPress and hadn't aged well. I decided to remake it from scratch using up to date technologies. Developed in React and a mix of quality of life modules + Firebase for storage. Deployed with Netlify. </p>
        </WorkElement>
        <WorkElement element='work1' number={'01'} title={'NodeJS - Electronic Invoice Processing'} img={require("../../assets/projects/Nodejs.png")} linkTitle={'Link'} link={'https://github.com/admapop/xml2csv'}>
          <h2>Development</h2>
          <h3>July 2019</h3>
          {/* <p>Most SMEs in Italy keep some sort of internal accounting, or at least a Cash Flow (Scadenziario) excel sheet to keep tabs on due invoices. However, 
            the adding of invoices to this file is a very tedious and manual process which eats up a lot of time. With the introduction of Electronic Invoicing in 
            Italy I was absolutely certain that I could manipulate the data in a helpful way, therefore I created a small NodeJS app which takes out the relevant information from
            downloaded invoices and packs it neatly in a CSV file, then dividing said invoices by which business unit they refer to.
          </p> */}
          <p>With the introduction of Electronic Invoicing in 
            Italy I was absolutely certain that I could manipulate the data in a helpful way, therefore I created a small NodeJS app which takes out the relevant information from
            downloaded invoices and packs it neatly in a CSV file, then dividing said invoices by which business unit they refer to.</p>
        </WorkElement>
        <WorkElement element='work2' number={'02'} title={'BURGEZ - Merchandise Shop'} img={isHovered1 ? require("../../assets/projects/BURGEZ Shop2.png") : require("../../assets/projects/BURGEZ Shop.png")} linkTitle={'Link'} link={'https://burgez-shop.herokuapp.com/'} reference={hoverRef1}>
          <h2>Design & Development</h2>
          <h3>WIP</h3>
          <p>Currently working on an eCommerce website where the company will sell all sorts of merchandise related to the brand. Developed in React + Redux + Firebase with all sorts of sprinkles under the hood.</p>
        </WorkElement>
      </div>
    </div>
  )
}

export default Work
