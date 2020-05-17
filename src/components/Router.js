import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Header from './Header'

export default () => (
  <Router>
    <Header/>
    <Route path="/" component={Home}/>
  </Router>
)