import React from 'react';
import Fretboard from './Fretboard.js';
import Data from './Data.js';
import _ from 'lodash';

class ChordView extends React.Component {
  render() {
    if(this.props.display_type.indexOf("all chords in") > -1) {
      return this.fullKeyCHordView(this.props.note, this.props.display_type);
    } else {
      return this.singleChordView(this.props.note, this.props.display_type);
    }
  }

  fullKeyCHordView(note, display_type) {
    var t = this;
    var scale = this.getScale(note, display_type);
    var views = [];

    _.mapKeys(Data.key_chord_indexes(), function(key_chord_indexes, position) {
      var inner_views = [];
      _.mapKeys(key_chord_indexes, function(chord_indexes, chord_type) {
        inner_views.push(t.buildInnerViews(chord_type, position, chord_indexes, scale));
      });
      views.push(t.buildOuterView(position, inner_views));
    });

    return <div><h1>{note} Major</h1>{views}</div>;
  }

  singleChordView(note, display_type) {
    return (
      <div class="chord_view">
        <h1>{note + " " + display_type}</h1>
        <Fretboard indexes={Data.note_indexes()[display_type]} scale={Data.scales()[note]}/>
      </div>
    )
  }

  buildInnerViews(chord_type, position, chord_indexes, scale) {
    return (
      <div className="chord_view span2" key={Date.now() + chord_type + position}>
        <p>{chord_type}</p>
        <Fretboard indexes={chord_indexes} scale={scale}/>
        <br/>
      </div>
    )
  }

  buildOuterView(position, inner_views) {
    return (
      <div className="chord_group row-fluid" key={Date.now() + position}>
        <h2>{position}</h2>
        {inner_views}
      </div>
    )
  }

  getScale(note, display_type) {
    return Data.scales()[note];
  }


}

export default ChordView
