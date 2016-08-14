import React from 'react';
import Data from './Data.js';

class Nav extends React.Component {
  render() {
    var props = this.props;
    var note_links = Data.notes().map(function(note) {
      return <Link text={note} ref={note} update={ props.update_note } key={note}/>
    });
    var display_type_links = Data.display_types(props.note).map(function(display_type) {
      return <Link text={display_type} ref={display_type} update={props.update_display_type} key={display_type}/>
    });

    return(
      <div>
        <div className="btn-group">
          <a className="btn dropdown-toggle" data-toggle="dropdown" href="#">
            Notes<span className="caret"></span>
          </a>
          <ul className="dropdown-menu">{note_links}</ul>
        </div>
        <div className="btn-group">
          <a className="btn dropdown-toggle" data-toggle="dropdown" href="#">
            Type<span className="caret"></span>
          </a>
          <ul className="dropdown-menu">{display_type_links}</ul>
        </div>
      </div>
    )
  }
}

class Link extends React.Component {
  render() {
    return <li><a href="#" onClick={this.props.update} >{this.props.text}</a></li>
  }
}

export default Nav
