import React from 'react'
import styled from 'styled-components'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Home from 'components/Home'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default () => (
  <Router>
    <Header/>
    <Route path="/" exact component={Home}/>
    <Footer/>
  </Router>
)