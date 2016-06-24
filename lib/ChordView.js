import React from 'react';
import Fretboard from './Fretboard.js';
import Data from './Data.js';

class ChordView extends React.Component {
  render() {
    var display_type = this.props.display_type;
    var note = this.props.note;
    var scale = Data.scales()[this.props.note];

    if(display_type === "key") {
      return this.displayFullKey(scale);
    } else {
      return this.displayChordView(scale, Data.note_indexes()[display_type], note + " " + display_type)
    }
  }

  displayFullKey(scale) {
    var views = [];

    for(var i = 0; i < Data.key_chord_index_categories().length; i++) {
      var category = Data.key_chord_index_categories()[i];
      var index_keys = Data.key_chord_index_category_indexes()[i];

      var inner_views = index_keys.map(function(index_key) {
        var key = Date.now() + category + index_key;
        return (
          <div class="chord_view" key={key}>
            <p>{index_key}</p>
            <Fretboard indexes={Data.key_chord_indexes()[category][index_key]} scale={scale}/>
          </div>
        )
      });

      var key = Date.now() + i;
      views.push(
        <div class="chord_group" key={key}>
          <h1>{category}</h1>
          {inner_views}
        </div>
      );
    }

    return <div>{views}</div>;
  }

  displayChordView(scale, indexes, title) {
    return (
      <div class="chord_view">
        <p>{title}</p>
        <Fretboard indexes={indexes} scale={scale}/>
      </div>
    )
  }
}

export default ChordView
