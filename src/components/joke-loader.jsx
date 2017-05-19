import React from 'react';
import { CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Speech from 'react-speech/dist/react-speech.min';
import VoiceList from './voice-list';

/*
  Nothing informative in this comment, but you should check out the Chuck Norris api docs to see what else you can do with it!
  https://api.chucknorris.io/
*/
const apiEndPoint = `https://api.chucknorris.io/jokes/random`;

/*
  ES6 has classes! (kind of)
  This syntax simply means that our JokeLoader class extends the React.Component class
  Abstractly, you can think of this inheritance like a Java class or something you've seen in Software I/II
  We need to extend this class because our JokeLoader component needs to have state
  It's harder to have state in functional components
*/
export default class JokeLoader extends React.Component {

  constructor(props) {
    super(props);
    // The state of this component is represented by this JavaScript object
    this.state = {
      data: null, // this is the data we'll get back from our Chuck Norris api call
      voice: null // our joke machine speaks! We're keeping track of it's voice in our state
    };
    /*
      This is a ES6 thing, we need to have access to our 'this' in our instance methods
      It's also a nice place to state what our instance functions are
    */
    this.fetchData = this.fetchData.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
  }

  /*
    This is a react lifecycle event method. When our component mounts (get's set in the DOM), this gets called
    This method will only get called once in it's existence
  */
  componentDidMount() {
    this.fetchData();
  }

  /*
    This is where we're interacting with the Chuck Norris api
  */
  fetchData() {
    /*
      this.setState is a function we get from the React.Component class
      When calling this function, you only have to tell React exactly what properties of your state change
      The other properties will stay the same
      When we're fecthing data, we want the data to be cleared, so make it null
      NOTE: this is an asynchronous function (ie, you don't know exactly when the effects of this function happen)
        Thinking asynchronously can be really tricky in the begining, but it's a powerful concept once you get the hang
        of it
    */
    this.setState({ data: null });

    /*
      fetch returns a Promise. This is the ES6 way for dealing with asynchronous functions
      Heres the docs for the fetch standard: https://fetch.spec.whatwg.org/
      It's technically not supported in this capacity in some browsers, so a library was used to take care of it

      Here, we're fetching the data from the end point we defined above
      Initially, nothing happens, because our request is traveling to and from Chuck Norris's server
      So we have to wait until the data comes back
      What's cool about a Promise is that you get to give it instructions on what to do with the data once it comes back
      We're doing that with what's called a 'callback function', which we pass to the .then function of our Promise
    */
    fetch(apiEndPoint)
    .then(response => response.json()) // This one is just part of fetching data, nothing too interesting is happening here
    .then((data) => {
      /*
        We got the data back from the api!! Yay :D
        Let's set our state with our new data. This will cause the component to re-render
      */
      this.setState({ data });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  /*
    This is a simple example of an event handler
    When a mouse/trackpad/whatever click happens, we want to fetch new data
    This will be attached to a 'Get New Joke' button
  */
  handleClick() {
    this.fetchData();
  }

  /*
    Another handler... Same as before
    What property of the state is changing?
  */
  handleVoiceChange(voice) {
    this.setState({ voice });
  }

  /*
    This is where the magic happens!
    Our render method is what React calls when it wants to know what this component represents (the declarative thing we talked about)
    Based on the component's current state and props, we're rendering what you see below in the return expression
  */
  render() {
    // Object destructuring to get our current state
    const { data, voice } = this.state;
    // This is a short hand way to check for null without throwing an error
    const joke = data && data.value;

    // This is the DOM element we're returning
    return (
      <div>
        <CardText>
          {/*
            Comments in JSX are weird...
            Below is short hand to pass the string 'Loading...' if the variable joke is 'falsy'
          */}
          {joke || 'Loading...'}
        </CardText>
        {/*
          You can pass css properties straight to a component for styling.
          NOTE: this will produce inline styling, which has a high specificity
          Try it yourself! To see obvious results, I'd suggest giving it a nice and ugly backgroundColor
        */}
        <div
          style={{
            display: 'flex'
          }}
        >
          {/*
            This Speech component is a library I found while writing this demo. It's slighly jank, but cool
            All of the error messages in your console are coming from this, not me I swear! :D
          */}
          <Speech
            text={joke || 'Loading...'}
            voice={voice}
            styles={{
              container: {
                flex: '1',
                width: null
              }
            }}
          />
          {/*
            Here, we're passing our VoiceList component a change handler function
            The Speech component above needs to know the current selected voice, so this is a way for
            JokeLoader to be notified by it's child, VoiceList when the voice selection changes
          */}
          <VoiceList
            onVoiceChange={this.handleVoiceChange}
          />
        </div>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {/*
            This is where our click handler function is going!
            If I remember correctly, we have a function for handling the click event, don't we?
          */}
          <RaisedButton
            onClick={this.handleClick}
            primary
          >
            Get a new joke!
          </RaisedButton>
        </div>
      </div>
    );
  }
}
