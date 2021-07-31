import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Page/Dashboard.page';
import Navbar from './Component/Navbar';
import { BrowserRouter, Link, Redirect, Route, Router, Switch } from 'react-router-dom';
import Container from './Container';



function App() {
  
  return (
    <div className="">

    <BrowserRouter>
    <Route path="/" >
      <Container />
    </Route>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
