import React from 'react';

class Fretboard extends React.Component {
  render() {
    var indexes = this.props.note_indexes;
    var scale = this.props.scale;
    return(
      <pre>{this.chordOnFretboard(scale, indexes)}</pre>
    )
  }

  freshFretboard() {
    var new_fretboard = [];
    var n = 18;
    while(n > 0) {
      new_fretboard.push([".", ".", ".", "."]);
      n -= 1;
    }
    return new_fretboard;
  }

  fretboard_note_indexes() {
    return {
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
    };
  }

  chordOnFretboard(scale, note_indexes) {
    var notes = [];
    while(note_indexes.length > 0) {
      var indexes = note_indexes.pop();
      notes.push(scale[indexes[0]][indexes[1]]);
    }

    var note = "";
    var new_fretboard = this.freshFretboard();
    while(notes.length > 0) {
      note = notes.pop();
      var fretboard_indexes = this.fretboard_note_indexes()[note];
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

export default Fretboard
