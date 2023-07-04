import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SmoothScrollBar from './components/SmoothScrollBar';

export default function App() {
  return (
    <div>
      <Router>
        {/* As I got Router let us have routes */}
        <NavMenu />
        <SmoothScrollBar>
          <Switch>
            {/* let us switch between different links */}
            <Route path="/about">
              {/* precise route */}
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollBar>
      </Router>
    </div>
  );
}
