import React from 'react';
import ChordView from './lib/ChordView.js';
import Data from './lib/Data.js';
import Nav from './lib/Nav.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      note: Data.notes()[0],
      display_type: Data.display_types()[0]
    }
    this.update_note = this.update_note.bind(this);
    this.update_display_type = this.update_display_type.bind(this);
  }

  update_note(e) {
    this.setState({note: e.currentTarget.innerHTML});
  }

  update_display_type(e) {
    this.setState({display_type: e.currentTarget.innerHTML});
  }

  render() {
    var update_note = this.update_note;
    var update_display_type = this.update_display_type;
    var state = this.state;

    return (
      <div>
        <Nav update_note={update_note} update_display_type={update_display_type} chords={state.chords} />
        <ChordView note={state.note} display_type={state.display_type}/>
      </div>
    )
  }
}

export default App
