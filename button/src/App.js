import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import Products from './Products';
import {Button} from 'react-bootstrap';
import Rating from './Rating';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub'
class App extends Component {
  constructor(){
    super();
    console.log (firebase);
    
  }
  render() {
    const isValid = true;
    return (
      <div >
          <h1 >My first react app</h1>
          <JumboTronComponent />
          <UserForm />
          <Products />
          <Button bsStyle="primary" disabled = {!isValid}>Primary</Button>
          <Rating rating="1" />
          <Rating rating="2" />
          <Rating rating="3" />
          <Rating rating="4" />
          <Rating rating="5" />
          <GitHub/>
          
      </div>
    );
  }
}

export default App;
