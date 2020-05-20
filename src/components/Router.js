import React from 'react'
import styled from 'styled-components'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Home from './Home'
import WorkDetail from '../routes/WorkDetail'

export default () => (
  <Router>
    <Header/>
    <Route path="/" exact component={Home}/>
    <Route path="/somewhere" component={WorkDetail}/>
    <Footer/>
  </Router>
)