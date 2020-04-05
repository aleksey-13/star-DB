import React from "react";

import { SwapiServiceConsumer } from "../swapi-service-context";

export const withSwapiService = mapMethodsToProps => Wrapped => {
  return props => (
    <SwapiServiceConsumer>
      {swapiService => (
        <Wrapped {...props} {...mapMethodsToProps(swapiService)} />
      )}
    </SwapiServiceConsumer>
  );
};
