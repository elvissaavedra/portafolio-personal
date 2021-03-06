import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Resume from '../Resume'
import Projects from '../Projects'
import LandingPage from '../LandingPage'
import Contact from '../Contact'
import AboutMe from '../About'

const Main = () => (
  <Switch>
    <Route exact path="/portafolio-personal" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main
