import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './Pages/routes'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to="/portafolio-personal"
              >
                Mi portafolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Mi CV</Link>
              <Link to="/aboutme">Acerca de mi</Link>
              <Link to="/projects">Proyectos</Link>
              <Link to="/contact">Contáctame</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to="/portafolio-personal"
              >
                Mi portafolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Mi CV</Link>
              <Link to="/aboutme">Acerca de mi</Link>
              <Link to="/projects">Proyectos</Link>
              <Link to="/contact">Contáctame</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App
