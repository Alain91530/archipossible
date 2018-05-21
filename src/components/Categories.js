/**
 * @description Carte Archipossible
 * @description Category search component
 * @author Alain Cadenat
 * @version 1.0
 */
/**
 * @description import React and Component
 */
import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

const allCategories = [
  'archipossible',
  'ressources',
  'sorties'
];
/**
 * @description component to render the categories selection
 */
class Categories extends Component {

  render() {
    return(
      <div>
        <p className="categorie-search">Catégories</p>
        <hr/>
        <ul className="categories-names">
          {allCategories.map((categorie, index) => {
            return(
              <li key={index}>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    id={ categorie }
                    name={ categorie }
                    defaultChecked="checked"
                    value={ categorie }/>
                  { categorie.charAt(0).toUpperCase()+categorie.substring(1) }
                </label>
              </li>
            );
          })}
        </ul>
        <hr/>
      </div>
    );
  }
}

export default Categories;