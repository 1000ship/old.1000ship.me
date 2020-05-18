import React from 'react'
import styled from 'styled-components'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'

export default () => (
  <Router>
    <Header/>
    <Route path="/" exact component={Home}/>
    <Footer/>
  </Router>
)