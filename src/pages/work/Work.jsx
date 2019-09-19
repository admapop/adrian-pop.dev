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
          <p>The previous website was made with WordPress and hadn't aged well. I decided to remake it from scratch using up to date technologies. Developed in React and a mix of quality of life modules. Deployed with Netlify. </p>
        </WorkElement>
        <WorkElement element='work1' number={'01'} title={'NodeJS - Electronic Invoice Processing'} img={'Picture'} link={'Link'}>
          <h2>Development</h2>
          <h3>July 2019</h3>
          <p>The previous website was made with WordPress and hadn't aged well. I decided to remake it from scratch using up to date technologies. Developed in React and a mix of quality of life modules. Deployed with Netlify. </p>
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
