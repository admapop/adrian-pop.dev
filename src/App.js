import React from 'react';
import { Switch, Route } from 'react-router-dom'
import posed, { PoseGroup } from 'react-pose'

import SocialBar from './components/social/SocialBar';
import Navbar from './components/navigation/Navbar';
import Tag from './components/page-tags/Tag';
import Home from './components/navigation/Home';
import { BreakpointProvider, setDefaultBreakpoints } from 'react-socks';

import About from './pages/about/About';
import Landing from './pages/landing/Landing';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';

import './App.css';

setDefaultBreakpoints([
  { mobile: 400 },
  { desktop: 1025 }
])

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

function App() {
  return (
    <BreakpointProvider>
    <Route
      render={({ location }) => (
        <div className="App">
          <Home />
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
    </BreakpointProvider>
  )
}

export default App;
