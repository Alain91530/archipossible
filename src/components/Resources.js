/**
 * @description Carte Archipossible
 * @description Resources search component
 * @author Alain Cadenat
 * @version 1.0
 */
/**
 * @description import React and Component
 */
import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

const allResources = [
  'architecte',
  'charpente',
  'éléctricité',
  'informatique',
  'plomberie',
  'autre'
];

/**
 * @description component to render the categories selection
 */
class Resource extends Component {

  render() {
    return(
      <div>
        <p className="categorie-search">Ressources</p>
        <hr/>
        <select>
          {allResources.map((resource, index) => (
            <option
              key = { index }
              value = { resource } multiple>
              { resource.charAt(0).toUpperCase()+resource.substring(1) }
            </option>
          ))}
        </select>
        <hr/>
      </div>
    );
  }
}

export default Resource;