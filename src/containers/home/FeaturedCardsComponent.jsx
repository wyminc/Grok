import React, { Component } from 'react';
import './styles.css';

import { CardOne, CardTwo, CardThree, CardFour  } from '../../components/CardComponent.jsx'


class FeaturedCardsComponent extends Component {

  componentWillMount() {
    console.log('willMount Hits');
  }

  componentDidMount() {
    console.log('didMount Hits');
  }

  render() {
    return (
      <div className="featured-card-container">
        <div className="featured-card">
          <CardOne />
        </div>
        <div className="featured-card">
          <CardTwo />
        </div>
        <div className="featured-card">
          <CardThree/>
        </div>
        <div className="featured-card">
          <CardFour/>
        </div>
      </div>

    )
  }
}

export default FeaturedCardsComponent;