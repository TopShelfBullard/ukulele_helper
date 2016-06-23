import React from 'react';
import Fretboard from './lib/Fretboard.js';
import Data from './lib/Data.js';

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
        <p>{this.state.note} {this.state.display_type}</p>
        <Fretboard scale={Data.scales()[state.note]} note_indexes={Data.note_indexes()[state.display_type]}/>
      </div>
    )
  }
}

class Nav extends React.Component {
  render() {
    var props = this.props;
    var note_links = Data.notes().map(function(note) {
      return <Link text={note} ref={note} update={ props.update_note } key={note}/>
    });
    var chord_links = Data.display_types().map(function(chord) {
      return <Link text={chord} ref={chord} update={props.update_display_type} key={chord}/>
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
