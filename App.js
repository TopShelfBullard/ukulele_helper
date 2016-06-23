import React from 'react';

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

class Fretboard extends React.Component {
  constructor() {
    super();
    this.state = {
      default_number_of_frets: 18,
      default_fret: [".", ".", ".", "."],
      fretboard_note_indexes: {
        "C": [[0, 1], [3, 3], [5, 0], [8, 2], [12, 1], [15, 3], [17, 0]],
        "C#": [[1, 1], [4, 3], [6, 0], [9, 2], [13, 1], [16, 3],],
        "Db": [[1, 1], [4, 3], [6, 0], [9, 2], [13, 1], [16, 3],],
        "D": [[2, 1], [5, 3], [7, 0], [10, 2], [14, 1], [17, 3]],
        "D#": [[3, 1], [6, 3], [8, 0], [11, 2], [15, 1]],
        "Eb": [[3, 1], [6, 3], [8, 0], [11, 2], [15, 1]],
        "E": [[0, 2], [4, 1], [7, 3], [9, 0], [12, 2], [16, 1]],
        "E#": [[1, 2], [5, 1], [8, 3], [10, 0], [13, 2], [17, 1]],
        "Fb": [[0, 2], [4, 1], [7, 3], [9, 0], [12, 2], [16, 1]],
        "F": [[1, 2], [5, 1], [8, 3], [10, 0], [13, 2], [17, 1]],
        "F#": [[2, 2], [6, 1], [9, 3], [11, 0], [14, 2]],
        "Gb": [[2, 2], [6, 1], [9, 3], [11, 0], [14, 2]],
        "G": [[0, 0], [3, 2], [7, 1], [10, 3], [12, 0], [15, 2]],
        "G#": [[1, 0], [4, 2], [8, 1], [11, 3], [13, 0], [16, 2]],
        "Ab": [[1, 0], [4, 2], [8, 1], [11, 3], [13, 0], [16, 2]],
        "A": [[0, 3], [2, 0], [5, 2], [9, 1], [12, 3], [14, 0], [17, 2]],
        "A#": [[1, 3], [3, 0], [6, 2], [10, 1], [13, 3], [15, 0]],
        "Bb": [[1, 3], [3, 0], [6, 2], [10, 1], [13, 3], [15, 0]],
        "B": [[2, 3], [4, 0], [7, 2], [11, 1], [14, 3], [16, 0]],
        "B#": [[0, 1], [3, 3], [5, 0], [8, 2], [12, 1], [15, 3], [17, 0]],
        "Cb": [[2, 3], [4, 0], [7, 2], [11, 1], [14, 3], [16, 0]]
      }
    }
    this.chordOnFretboard = this.chordOnFretboard.bind(this);
    this.freshFretboard = this.freshFretboard.bind(this);
  }

  render() {
    var indexes = this.props.note_indexes.slice();
    var scale = this.props.scale.slice();
    return(
      <pre>{this.chordOnFretboard(scale, indexes)}</pre>
    )
  }
  freshFretboard() {
    var new_fretboard = [];
    var n = 18;
    while(n > 0) {
      new_fretboard.push(this.state.default_fret.slice());
      n -= 1;
    }
    return new_fretboard;
  }
  chordOnFretboard(scale, note_indexes) {
    var new_scale = scale.slice();
    var new_note_indexes = note_indexes.slice();

    var notes = [];
    while(new_note_indexes.length > 0) {
      var indexes = new_note_indexes.pop();
      notes.push(new_scale[indexes[0]][indexes[1]]);
    }

    var note = "";
    var new_fretboard = this.freshFretboard().slice();
    while(notes.length > 0) {
      note = notes.pop();
      var fretboard_indexes = this.state.fretboard_note_indexes[note].slice();
      while(fretboard_indexes.length > 0) {
        var fretboard_index = fretboard_indexes.pop();
        new_fretboard[fretboard_index[0]][fretboard_index[1]] = note;
      }
    }

    var chord = "";
    for (var i = 0; i < new_fretboard.length; i++) {
      var fret = new_fretboard[i];
      var note1 = fret[0].length > 1 ? " " + fret[0] + " " : " " + fret[0] + "  ";
      var note2 = fret[1].length > 1 ? " " + fret[1] + " " : " " + fret[1] + "  ";
      var note3 = fret[2].length > 1 ? " " + fret[2] + " " : " " + fret[2] + "  ";
      var note4 = fret[3].length > 1 ? " " + fret[3] + " " : " " + fret[3] + "  ";
      if(i < 10) {
        chord = chord + i + " " + note1 + note2 + note3 + note4 + "\n   ______________\n";
      } else {
        chord = chord + i + note1 + note2 + note3 + note4 + "\n   ______________\n";
      }
    }

    return chord;
  }
}


export default App
