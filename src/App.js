import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JokeGenerator from './components/joke-generator';
import JokeLoader from './components/joke-loader';

// This module needs to be here to make mobile touch/clicks more performant
// This is specific to Material-UI, so just ignore this now
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

// We can import our associated css files into our component
import './App.css';

/*
  You can think of a React component as a function, which is exactly what you see here
  This is an arrow function. It was introduced to JavaScript in the ECMA2015 spec (aka ES6)
  What's special about arrow functions is that they don't have a binding to `this` (along with the cool syntax)
  This means that they can't be used for constructors
  To increase performance, we can use what's called an expression body.
  The syntax looks something like this:
  const App = () => (
    <Component />
  );
*/
const App = () => {
  return (
    <MuiThemeProvider>
      <div className="App">
        <JokeGenerator>
          <JokeLoader />
        </JokeGenerator>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
