import React from 'react';

import Itemlist from '../item-list';
import { WithData } from '../hoc-helper';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarhips,
    getAllPlanets
} = swapiService;

const PersonList = () => WithData(Itemlist, getAllPeople);
const StarshipList = () => WithData(Itemlist, getAllPlanets);
const PlanetList = () => WithData(Itemlist, getAllStarhips);

export {
    PersonList,
    StarshipList,
    PlanetList
};