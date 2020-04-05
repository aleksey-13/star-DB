import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import StarshipDetails from "../starship-details";

import { SwapiServicePropvider } from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";

import "./app.css";
import {
  PeoplePage,
  StarshipsPage,
  PlanetsPage,
  LoginPage,
  SecretPage
} from "../pages";

const App = () => {
  const [swapiService, setSwapiService] = useState(new SwapiService());
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onServiceChange = () => {
    const Service =
      swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
    setSwapiService(new Service());
  };

  const onLogin = () => setIsLoggedIn(true);

  return (
    <ErrorBoundry>
      <SwapiServicePropvider value={swapiService}>
        <Router>
          <div className="appWrap">
            <Header onServiceChange={onServiceChange} />
            <RandomPlanet />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <h2 style={{ textAlign: "center" }}>Welcome to StartDB</h2>
                )}
              />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/" component={PlanetsPage} />
              <Route path="/planets/:id" component={PlanetsPage} />
              <Route path="/starships/" exact component={StarshipsPage} />
              <Route
                path="/starships/:id"
                render={({ match, location, history }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
              <Route
                path="/login"
                exact
                render={() => (
                  <LoginPage onLogin={onLogin} isLoggenIn={isLoggedIn} />
                )}
              />
              <Route
                path="/secret"
                exact
                render={() => <SecretPage isLoggenIn={isLoggedIn} />}
              />
              <Route
                render={() => (
                  <h2 style={{ textAlign: "center" }}>
                    <small>Error 404</small>
                    <br />
                    Page not found
                  </h2>
                )}
              />
            </Switch>
          </div>
        </Router>
      </SwapiServicePropvider>
    </ErrorBoundry>
  );
};

export default App;
