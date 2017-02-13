// In every React component file, we need to import the react library
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*
  This is where we're anchoring our entire React app
  This point could be any DOM element on our page
  Since we're using React for our whole page, we're anchoring on the main <div> that has the id of `root`.
  The library ReactDom takes care of interacting with the actual DOM elements on the page
  The library React handles all of the logic behind managing all of our components for us
*/
const anchorElementId = ''; // root element id goes here. hint: look at index.html

ReactDOM.render(
  <App />,
  document.getElementById(anchorElementId) // This is just normal JavaScript getting a DOM element by it's unique id
);
