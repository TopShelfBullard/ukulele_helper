import React from 'react';
import Data from './Data.js';

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

export default Nav
