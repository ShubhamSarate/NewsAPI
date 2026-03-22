import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = (props) => {
  let pageS = 9;
  let apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress,setProgress] = useState(0);

    return (
      <div>
        <Router>
        <LoadingBar
        color = '#f11946'
        height = {3}
        progress = {progress}  
        />
        <NavBar/>
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageS} country="us" category="general"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageS} country="us" category="science"/></Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageS} country="us" category="general"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageS} country="us" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageS} country="us" category="technology"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageS} country="us" category="health"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageS} country="us" category="entertainment"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageS} country="us" category="business"/></Route>
        </Switch>
        </Router>
      </div>
    )
}

export default App; 

