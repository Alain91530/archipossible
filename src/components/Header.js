/**
 * @description FEND Project 8 : Neighborhood
 * @description Header component
 * @author Alain Cadenat
 * @version 1.0
 */
/**
 * @description import React and component
 */
import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

/**
 * @description component to render a fixed header
 */
class Header extends Component {

/**
 * @description render the header
 */
  render() {
    return(
      <header className="header">
        <div className="logo">Archipossible</div>
        <h1 tabIndex="0" className="header-title">Ressources pour autoconstructeurs</h1>
      </header>
    );
  }
}

export default Header;