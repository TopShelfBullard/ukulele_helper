import React from 'react';
import Data from './Data.js';

class Fretboard extends React.Component {
  render() {
    var indexes = this.props.indexes;
    var scale = this.props.scale;
    return(
      <pre className="fretboard">{this.chordOnFretboard(scale, indexes)}</pre>
    )
  }

  chordOnFretboard(scale, note_indexes) {
    var notes = this.getNotesForIndexesFromScale(scale, note_indexes);
    var fretboard = this.fillFretboardWithNotes(this.freshFretboard(), notes);
    return this.buildTextForDisplayFromFretboardArray(fretboard);
  }

  getNotesForIndexesFromScale(scale, note_indexes) {
    return note_indexes.map(function(indexes) {
      return scale[indexes[0]][indexes[1]]
    });
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

  fillFretboardWithNotes(fretboard, notes) {
    while(notes.length > 0) {
      var note = notes.pop();
      var fretboard_indexes = Data.fretboard_note_indexes()[note];

      while(fretboard_indexes.length > 0) {
        var fretboard_index = fretboard_indexes.pop();
        fretboard[fretboard_index[0]][fretboard_index[1]] = note;
      }
    }

    return fretboard;
  }

  buildTextForDisplayFromFretboardArray(fretboard) {
    var text_for_display = "";
    for (var i = 0; i < fretboard.length; i++) {
      var fret = this.regularizeWhitespaceForNotes(fretboard[i]);
      var fret_number = this.regularizeWhitespaceFretNumber(i);
      if(i === 0) {
        text_for_display = text_for_display + fret_number + " " + fret[0] + fret[1] + fret[2] + fret[3] + "\n___________________\n";
      } else {
        text_for_display = text_for_display + fret_number + " " + fret[0] + fret[1] + fret[2] + fret[3] + "\n";
      }

    }
    return text_for_display;
  }

  regularizeWhitespaceForNotes(fret) {
    for (var i = 0; i < fret.length; i++) {
      fret[i] = this.regularizeWhitespaceForNote(fret[i]);
    }
    return fret
  }

  regularizeWhitespaceForNote(note) {
    return note.length > 1 ? " " + note + " " : " " + note + "  ";
  }

  regularizeWhitespaceFretNumber(fret_number) {
    return (fret_number < 10) ? fret_number + " " : fret_number
  }
}

export default Fretboard
