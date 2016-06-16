import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      note: "c",
      chord: "",
      notes: ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"],
      chords: ["M", "m", "maj7", "m7", "7", "dim7", "m7(b5)", "m-maj7", "maj7(#5)"]
    }
    this.update_note = this.update_note.bind(this)
    this.update_chord = this.update_chord.bind(this)
  }
  update_note(e) {
    this.setState({
      note: e.currentTarget.innerHTML
    })
  }
  update_chord(e) {
    this.setState({
      chord: e.currentTarget.innerHTML
    })
  }
  render() {
    var update_note = this.update_note;
    var update_chord = this.update_chord;
    var state = this.state;
    return (
      <div>
        <Links update_note={update_note}
                    update_chord={update_chord}
                    notes={state.notes}
                    chords={state.chords} />
        <p>{state.note}{state.chord}  chord goes here </p>
      </div>
    )
  }
}

class Links extends React.Component {
  render() {
    var props = this.props;
    return (
      <div>
        {props.notes.map(function (note) {
          return (
            <Link note={ note } ref={ note } update={ props.update_note } key={note}/>
          );
        })}
        <br/>
        <br/>
        {props.chords.map(function (chord) {
          return (
            <Link note={ chord } ref={ chord } update={ props.update_chord } key={chord}/>
          );
        })}
      </div>
    )
  }
}

class Link extends React.Component {
  render() {
    var update = this.props.update;
    var note = this.props.note
    return (
      <a href="#" onClick={ update } >{note}</a>
    )
  }
}

export default App