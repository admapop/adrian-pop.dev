import React from 'react'

import WorkElement from '../../components/work-page-component/WorkElement';
import PageTitle from '../../components/page-title/PageTitle';

import './work.styles.scss'

const Work = ({ match }) => {
  return (
    <div className='work-page'>
      <PageTitle location={match} title={match.url.substring(1).toUpperCase()} />
      <div className='work-container'>
        <WorkElement element='work0' number={'00'} title={'BURGEZ - New Website'} img={require("../../assets/projects/BURGEZ Website.jpg")} link={'Link'}>
          <h2>Design & Development</h2>
          <h3>August 2019</h3>
          <p>The previous website was made with WordPress and hadn't aged well. I decided to remake it from scratch using up to date technologies. Developed in React and a mix of quality of life modules + Firebase for storage. Deployed with Netlify. </p>
        </WorkElement>
        <WorkElement element='work1' number={'01'} title={'NodeJS - Electronic Invoice Processing'} img={'Picture'} link={'Link'}>
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
        <WorkElement element='work2' number={'02'} title={'BURGEZ - Merchandise Shop'} img={'Picture'} link={'Link'}>
          <h2>Design & Development</h2>
          <h3>WIP</h3>
          <p>Currently working on an eCommerce website where the company will sell all sorts of merchandise related to the brand. Developed in React + Redux + Firebase with all sorts of sprinkles under the hood.</p>
        </WorkElement>
      </div>
    </div>
  )
}

export default Work
