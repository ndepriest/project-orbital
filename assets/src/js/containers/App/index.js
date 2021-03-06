import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Title from '../../components/Title';
import Home from '../../components/Home'
import Calculator from '../../components/Calculator'
import Pomodoro from '../../components/Pomodoro'

class App extends Component {
  render () {
    const text = 'Project Orbital';
    return (
      <Router>
        <body>
          <nav className="navbar">
            <div className="logo">Welcome to Project Orbital</div>
            <ul className="navbar-nav">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/calculator'} className="nav-link"> Calculator </Link></li>
              <li><Link to={'/pomodoro'} className="nav-link"> Pomodoro </Link></li>
            </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/calculator' component={Calculator} />
              <Route path='/pomodoro' component={Pomodoro} />
          </Switch>
        </body>
      </Router>
    )
  }
}
export default App;