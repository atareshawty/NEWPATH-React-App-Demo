import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const getVoices = (voices) =>({
  voice: voices[0].name,
  voices: voices.map(({ name }) => name)
});

export default class VoiceList extends React.Component {

  static get propTypes() {
    return {
      onVoiceChange: React.PropTypes.func.isRequired
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      voice: null,
      voices: []
    };
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
    this.handleVoicesChange = this.handleVoicesChange.bind(this);
  }

  componentDidMount() {
    window.speechSynthesis.onvoiceschanged = this.handleVoicesChange;
  }

  componentDidUnMount() {
    window.speechSynthesis.onvoiceschanged = null;
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
    const items = this.state.voices.map((name) =>
      <MenuItem
        value={name}
        key={name}
        primaryText={name}
      />
    );

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
