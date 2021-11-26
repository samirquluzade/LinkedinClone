import React, {useEffect} from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";
import {connect} from 'react-redux';

import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import {getUserAuth} from "./actions";


function App(props) {
    useEffect(() => {
        props.getUserAuth();
    },[]);
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route exact path='/home' element={[<Header />,<Home />]}/>
        </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => ({
    getUserAuth: () => dispatch(getUserAuth())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
