import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails, { Record } from '../item-details/item-details'

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components'

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState({showRandomPlanet: !this.state.showRandomPlanet});
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails itemId={5} getData={getStarship} getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="constInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <div>
        <Header />
        {this.state.showRandomPlanet ? <RandomPlanet /> : null}
        <div className="container-buttons">
          <button 
            className="btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Planet
          </button>
        </div>
        
        <PersonDetails itemId={3} />

        <PlanetDetails itemId={5} />

        <StarshipDetails itemId={9} />

        <PersonList>
          { ({name}) => <span>{name}</span>}
        </PersonList>
        <Row left={personDetails} right={starshipDetails}/>
      </div>
    );
  }
};