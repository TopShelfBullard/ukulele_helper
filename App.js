import React from 'react';
import Fretboard from './lib/Fretboard.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      note: "C",
      chord: "M",
      notes: ["C", "G", "D", "A", "E", "B", "F#", "C#", "F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb"],
      chords: ["M", "m", "dim", "aug", "5", "maj7", "m7", "7", "dim7", "m7(b5)", "m/maj7", "maj7(#5)", "6", "m6",
               "min/min6", "add9", "madd9", "sus2", "sus4", "full scale"],
      scales:{
        "C":  [["Cb", "C", "C#"], ["Db", "D", "D#"], ["Eb", "E", "E#"], ["Fb", "F", "F#"], ["Gb", "G", "G#"], ["Ab", "A", "A#"], ["Bb", "B", "B#"]],
        "G":  [["Gb", "G", "G#"], ["Ab", "A", "A#"], ["Bb", "B", "B#"], ["Cb", "C", "C#"], ["Db", "D", "D#"], ["Eb", "E", "E#"], ["F", "F#", "G"]],
        "D":  [["Db", "D", "D#"], ["Eb", "E", "E#"], ["F", "F#", "G"], ["Gb", "G", "G#"], ["Ab", "A", "A#"], ["Bb", "B", "B#"], ["C", "C#", "D"]],
        "A":  [["Ab", "A", "A#"], ["Bb", "B", "B#"], ["C", "C#", "D"], ["Db", "D", "D#"], ["Eb", "E", "E#"], ["F", "F#", "G"], ["G", "G#", "A"]],
        "E":  [["Eb", "E", "E#"], ["F", "F#", "G"], ["G", "G#", "A"], ["Ab", "A", "A#"], ["Bb", "B", "B#"], ["C", "C#", "D"], ["D", "D#", "E"]],
        "B":  [["Bb", "B", "B#"], ["C", "C#", "D"], ["D", "D#", "E"], ["Eb", "E", "E#"], ["F", "F#", "G"], ["G", "G#", "A"], ["A", "A#", "B"]],
        "F#": [["F", "F#", "G"], ["G", "G#", "A"], ["A", "A#", "B"], ["Bb", "B", "B#"], ["C", "C#", "D"], ["D", "D#", "E"], ["E", "E#", "F#"]],
        "C#": [["C", "C#", "D"], ["D", "D#", "E"], ["E", "E#", "F#"], ["F", "F#", "G"], ["G", "G#", "A"], ["A", "A#", "B"], ["C", "B#", "C#"]],
        "F":  [["Fb", "F", "F#"], ["Gb", "G", "G#"], ["Ab", "A", "A#"], ["A", "Bb", "B"], ["Cb", "C", "C#"], ["Db", "D", "D#"], ["Eb", "E", "E#"]],
        "Bb": [["A", "Bb", "B"], ["Cb", "C", "C#"], ["Db", "D", "D#"], ["D", "Eb", "E"], ["Fb", "F", "F#"], ["Gb", "G", "G#"], ["Ab", "A", "A#"]],
        "Eb": [["D", "Eb", "E"], ["Fb", "F", "F#"], ["Gb", "G", "G#"], ["G", "Ab", "A"], ["A", "Bb", "B"], ["Cb", "C", "C#"], ["Db", "D", "D#"]],
        "Ab": [["G", "Ab", "A"], ["A", "Bb", "B"], ["Cb", "C", "C#"], ["C", "Db", "D"], ["D", "Eb", "E"], ["Fb", "F", "F#"], ["Gb", "G", "G#"]],
        "Db": [["C", "Db", "D"], ["D", "Eb", "E"], ["Fb", "F", "F#"], ["A", "Gb", "G"], ["G", "Ab", "A"], ["A", "Bb", "B"], ["Cb", "C", "C#"]],
        "Gb": [["A", "Gb", "G"], ["G", "Ab", "A"], ["A", "Bb", "B"], ["Bb", "Cb", "C"], ["C", "Db", "D"], ["D", "Eb", "E"], ["Fb", "F", "F#"]],
        "Cb": [["Bb", "Cb", "C"], ["C", "Db", "D"], ["D", "Eb", "E"], ["Eb", "Fb", "F"], ["A", "Gb", "G"], ["G", "Ab", "A"], ["A", "Bb", "B"]]
      },
      note_chord_indexes: {
        "M": [[0,1], [2,1], [4,1]], "m": [[0,1], [2,0], [4,1]], "dim": [[0,1], [2,0], [4,0]], "aug": [[0,1], [2,1], [4,2]],
        "5": [[0,1], [4,1]], "maj7": [[0,1], [2,1], [4,1], [6,1]], "m7": [[0,1], [2,0], [4,1], [6,0]], "7": [[0,1], [2,1], [4,1], [6,0]],
        "m7(b5)": [[0,1], [2,0], [4,0], [6,0]], "dim7": [[0,1], [2,0], [4,0], [5,0]], "m/maj7": [[0,1], [2,0], [4,1], [6,0]],
        "maj7(#5)": [[0,1], [2,1], [4,2], [6,1]], "6": [[0,1], [2,1], [4,1], [5,1]], "m6": [[0,1], [2,0], [4,1], [5,1]],
        "min/min6": [[0,1], [2,0], [4,1], [5,0]], "add9": [[0,1], [1,1], [2,1], [4,1]], "madd9": [[0,1], [1,1], [2,0], [4,1]],
        "sus2": [[0,1], [1,1], [4,1]], "sus4": [[0,1], [3,1], [4,1]], "full scale" : [[0,1], [1,1], [2,1], [3,1], [4,1], [5,1], [6,1]]
      },
      key_chord_indexes: {
        triads: {
          "I": [[0,1], [2,1], [4,1]], "ii": [[1,1], [3,1], [5,1]], "iii": [[2,1], [4,1], [6,1]], "IV": [[3,1], [5,1], [7,1]],
          "V": [[4,1], [6,1], [1,1]], "vi": [[5,1], [0,1], [2,1]], "vii": [[6,1], [1,1], [3,1]]
        },
        relative_minor: {
          "i": [[5,1], [0,1], [2,1]], "ii": [[6,1], [1,1], [3,1]], "III": [[0,1], [2,1], [4,1]], "iv": [[1,1], [3,1], [5,1]],
          "v": [[2,1], [4,1], [6,1]], "VI": [[3,1], [5,1], [7,1]], "VII": [[4,1], [6,1], [1,1]]
        },
        seventh: {
          "I7": [[0,1], [2,1], [4,1], [6,1]], "ii7": [[1,1], [3,1], [5,1], [0,1]], "iii7": [[2,1], [4,1], [6,1], [1,1]],
          "IV7": [[3,1], [5,1], [0,1], [2,1]], "V7": [[4,1], [6,1], [1,1], [3,1]], "vi7": [[5,1], [0,1], [2,1], [4,1]],
          "vii7": [[6,1], [1,1], [3,1], [5,1]]
        },
        sixth: {
          "I6": [[0,1], [2,1], [4,1], [5,1]], "ii6": [[1,1], [3,1], [5,1], [6,1]], "iii6": [[2,1], [4,1], [6,1], [0,1]],
          "IV6": [[3,1], [5,1], [0,1], [1,1]], "V6": [[4,1], [6,1], [1,1], [2,1]], "vi6": [[5,1], [0,1], [2,1], [3,1]],
          "viidim7": [[6,1], [1,1], [3,1], [4,1]]
        }
      }
    }
    this.update_note = this.update_note.bind(this);
    this.update_chord = this.update_chord.bind(this);
  }

  update_note(e) {
    this.setState({note: e.currentTarget.innerHTML});
  }

  update_chord(e) {
    this.setState({chord: e.currentTarget.innerHTML});
  }

  render() {
    var update_note = this.update_note;
    var update_chord = this.update_chord;
    var state = this.state;

    return (
      <div>
        <Nav update_note={update_note} update_chord={update_chord} notes={state.notes} chords={state.chords} />
        <Fretboard scale={state.scales[state.note]} note_indexes={state.note_chord_indexes[state.chord]}/>
      </div>
    )
  }
}

class Nav extends React.Component {
  render() {
    var props = this.props;
    var note_links = props.notes.map(function(note) {
      return <Link text={note} ref={note} update={ props.update_note } key={note}/>
    });
    var chord_links = props.chords.map(function(chord) {
      return <Link text={chord} ref={chord} update={props.update_chord} key={chord}/>
    });

    return <div>{note_links}<br/><br/>{chord_links}</div>
  }
}

class Link extends React.Component {
  render() {
    return <a href="#" onClick={this.props.update} >{this.props.text}</a>
  }
}

export default App
