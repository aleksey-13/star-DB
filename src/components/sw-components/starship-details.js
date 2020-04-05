import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = props => (
  <ItemDetails {...props}>
    <Record label="Model" field="model" />
    <Record label="Manufacturer" field="manufacturer" />
    <Record label="Cost In Credits" field="costInCredits" />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getStarship,
  getImgUrl: swapiService.getStarshipImage
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
