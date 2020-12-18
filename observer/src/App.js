import React from 'react';
import NavBar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Stills from "./pages/stills/Stills";
import OnSet from "./pages/on-set/OnSet";
import CastAndCrew from "./pages/cast-and-crew/CastAndCrew";
import Trailer from "./pages/trailer/Trailer";
import Contact from "./pages/contact/Contact";

import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/stills' exact component={Stills} />
        <Route path='/on-set' exact component={OnSet} />
        <Route path='/trailers' exact component={Trailer} />
        <Route path='/cast-and-crew' exact component={CastAndCrew} />
        <Route path='/contact' exact component={Contact} />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
