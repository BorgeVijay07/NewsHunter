import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" apiKey={this.apiKey} pageSize={9} country="in" category="general"/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" apiKey={this.apiKey} pageSize={9} country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey} pageSize={9} country="in" category="entertainment"/></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} key="general" apiKey={this.apiKey} pageSize={9} country="in" category="general"/></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health" apiKey={this.apiKey} pageSize={9} country="in" category="health"/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" apiKey={this.apiKey} pageSize={9} country="in" category="science"/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={9} country="in" category="sports"/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" apiKey={this.apiKey} pageSize={9} country="in" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
