export default class SwapiService {
  _apiBase = "https://swapi.co/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  getResource = async url => {
    const responce = await fetch(`${this._apiBase}${url}`);

    if (!responce.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}${url}, received ${responce.status}`
      );
    }
    const data = await responce.json();

    return data;
  };

  getAllPeople = async () => {
    const result = await this.getResource("/people/");

    return result.results.map(this._transfortPerson);
  };

  getPerson = async id => {
    const person = await this.getResource(`/people/${id}`);

    return this._transfortPerson(person);
  };

  getAllPlanets = async () => {
    const result = await this.getResource("/planets/");

    return result.results.map(this._transfortPlanet);
  };

  getPlanet = async id => {
    const planet = await this.getResource(`/planets/${id}`);

    return this._transfortPlanet(planet);
  };

  getAllStarships = async () => {
    const result = await this.getResource("/starships/");

    return result.results.map(this._transfortStarship);
  };

  getStarship = async id => {
    const starship = await this.getResource(`/starships/${id}`);

    return this._transfortStarship(starship);
  };

  getPersonImage = ({ id }) => `${this._imageBase}/characters/${id}.jpg`;

  getPlanetImage = ({ id }) => `${this._imageBase}/planets/${id}.jpg`;

  getStarshipImage = ({ id }) => `${this._imageBase}/starships/${id}.jpg`;

  _extractId = item => {
    const idRegExp = /\/([0-9]*)\/$/;

    return item.match(idRegExp)[1];
  };

  _transfortPlanet = planet => {
    return {
      id: this._extractId(planet.url),
      name: planet.name,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      population: planet.population
    };
  };

  _transfortPerson = person => {
    return {
      id: this._extractId(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };

  _transfortStarship = starship => {
    return {
      id: this._extractId(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits
    };
  };
}
