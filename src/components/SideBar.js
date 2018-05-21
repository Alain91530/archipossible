/**
 * @description Carte Archipossible
 * @description SideBar component
 * @author Alain Cadenat
 * @version 1.0
 */
/**
 * @description import React and Component
 */
/* eslint-disable */
import React, { Component } from 'react';
import Categories from './Categories';
import Resources from './Resources';
/* eslint-enable */

/**
 * @description component to render the sidebar menu
 */
class SideBar extends Component {

  render() {
    return(
      <aside className="sidebar">
        <Categories />
        <Resources />
      </aside>
    );
  }
}

export default SideBar;