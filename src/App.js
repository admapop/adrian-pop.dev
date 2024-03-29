import React from 'react';
import { Switch, Route } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

import SocialBar from './components/social/SocialBar';
import Navbar from './components/navigation/Navbar';
import Tag from './components/page-tags/Tag';
import Home from './components/navigation/Home';
import { ShowAt } from 'react-with-breakpoints';
import Headroom from 'react-headroom'

import About from './pages/about/About';
import Landing from './pages/landing/Landing';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';

import logo from './assets/og_image.png'

import './App.css';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

function App() {
  return (
    <Route
      render={({ location }) => (
        <div className="App">
          <ShowAt breakpoint='mediumAndBelow'>
            <Headroom wrapperStyle={{textAlign: 'center', paddingTop: '2rem'}}>
              <Home />
            </Headroom>
          </ShowAt>
          <ShowAt breakpoint='largeAndAbove'>
            <Home />
          </ShowAt>
          <SocialBar mobile={false} />
          <Navbar />
          <Tag />
          <Tag date />
          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path='/' component={Landing} />
                <Route exact path='/about' component={About} />
                <Route exact path='/work' component={Work} />
                <Route exact path='/contact' component={Contact} />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </div>
      )}
    />
  )
}

export default App;
