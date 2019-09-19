import React from 'react';
import { Switch, Route } from 'react-router-dom'

import SocialBar from './components/social/SocialBar';
import Navbar from './components/navigation/Navbar';
import Tag from './components/page-tags/Tag';
import Home from './components/navigation/Home';

import About from './pages/about/About';
import Landing from './pages/landing/Landing';
import Work from './pages/work/Work';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <SocialBar />
      <Navbar />
      <Tag />
      <Tag date />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={About} />
        <Route exact path='/work' component={Work} />
      </Switch>
    </div>
  );
}

export default App;
