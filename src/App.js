import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={9} country="in" category="general"/></Route>
            <Route exact path="/business"><News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={9} country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={9} country="in" category="entertainment"/></Route>
            <Route exact path="/general"><News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={9} country="in" category="general"/></Route>
            <Route exact path="/health"><News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={9} country="in" category="health"/></Route>
            <Route exact path="/science"><News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={9} country="in" category="science"/></Route>
            <Route exact path="/sports"><News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={9} country="in" category="sports"/></Route>
            <Route exact path="/technology"><News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={9} country="in" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
}

export default App;
