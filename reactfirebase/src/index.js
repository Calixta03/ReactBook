import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config={
  // Initialize Firebase
    apiKey: "AIzaSyA16qNrLULYKmG1S0OTpYmS-IdaS-ccNZk",
    authDomain: "reactfirebase-c0122.firebaseapp.com",
    databaseURL: "https://reactfirebase-c0122.firebaseio.com",
    projectId: "reactfirebase-c0122",
    storageBucket: "reactfirebase-c0122.appspot.com",
    messagingSenderId: "654127564348"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
