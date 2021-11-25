import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";

import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route exact path='/home' element={[<Header />,<Home />]}/>
        </Routes>
    </div>
  );
}

export default App;
