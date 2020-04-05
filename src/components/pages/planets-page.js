import React, { Component } from "react";

import ErrorBoundry from "../error-boundry";
import Row from "../row";
import { PlanetList } from "../sw-components/item-lists";

import PlanetDetails from "../sw-components/planet-details";

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <ErrorBoundry>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={this.state.selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}
