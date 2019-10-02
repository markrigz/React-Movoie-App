import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Movie from './components/Movie';

const App= () => {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/movie/:movieId" component={Movie}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
