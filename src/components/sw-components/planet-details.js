import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = props => (
  <ItemDetails {...props}>
    <Record label="Diameter" field="diameter" />
    <Record label="Rotation Period" field="rotationPeriod" />
    <Record label="Population" field="population" />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getPlanet,
  getImgUrl: swapiService.getPlanetImage
});

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
