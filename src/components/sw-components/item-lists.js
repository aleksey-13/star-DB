import React from "react";

import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  compose,
  withChildFunction
} from "../hoc-helpers";

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ name, model }) => (
  <span>
    {name} <small>({model})</small>
  </span>
);

const mapPersomMethodsToProps = swapiService => ({
  getData: swapiService.getAllPeople
});

const mapPlanetMethodsToProps = swapiService => ({
  getData: swapiService.getAllPlanets
});

const mapStarshipMethodsToProps = swapiService => ({
  getData: swapiService.getAllStarships
});

export const PersonList = compose(
  withSwapiService(mapPersomMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);
