/*
  There are a few more advanced things going on in this component
  Most likely a little out of scope for the time we have
  If you're interested, take a look as the lifecycle functions combined with eventhandlers
*/
import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const getVoices = (voices) => ({
  voice: voices[0].name,
  voices: voices.map(({ name }) => name)
});

export default class VoiceList extends React.Component {

  /*
    The propTypes property of our class defines the api of our component
    Here, we're declaring what props this component is expecting and what types each prop has
  */
  static get propTypes() {
    return {
      onVoiceChange: React.PropTypes.func.isRequired
    };
  }

  /*
    In the constructor of our component, we're declaring what our initial state looks like
    We're also binding the `this` value to the component's instance methods that we're declaring ourselves
  */
  constructor(props) {
    super(props);
    this.state = {
      voice: null,
      voices: []
    };
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
    this.handleVoicesChange = this.handleVoicesChange.bind(this);
  }

  /*
    These next two functions are part of the React component lifecycle. This is a little out of scope for our purposes
    Further reading: https://facebook.github.io/react/docs/react-component.html
  */
  componentDidMount() {
    window.speechSynthesis.addEventListener('voiceschanged', this.handleVoicesChange);
  }

  componentDidUnMount() {
    window.speechSynthesis.removeEventListener('voiceschanged', this.handleVoicesChange);
  }

  componentShouldUpdate(props, state) {
    const { voice, voices } = this.state;
    if (voice === state.voice && voices.length > 0) {
      return false;
    }
    return true;
  }

  handleVoiceChange(event, index, voice) {
    this.props.onVoiceChange(voice);
    this.setState({ voice });
  }

  handleVoicesChange() {
    const state = getVoices(window.speechSynthesis.getVoices());

    this.props.onVoiceChange(state.voices[0]);
    this.setState(state);
  }

  render() {
    const defaultValue = 'Loading voices...';
    const items = this.state.voices.map((name) => (
      <MenuItem
        value={name}
        key={name}
        primaryText={name}
      />
    ));

    return (
      <SelectField
        value={this.state.voices.length ? this.state.voice : defaultValue}
        onChange={this.handleVoiceChange}
        maxHeight={200}
      >
        {this.state.voices.length ?
          items :
          <MenuItem
            value={defaultValue}
            primaryText={defaultValue}
          />
        }
      </SelectField>
    )
  }
}
