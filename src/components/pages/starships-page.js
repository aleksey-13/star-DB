import React from "react";
import { withRouter } from "react-router-dom";

import ErrorBoundry from "../error-boundry";
import { StarshipList } from "../sw-components/item-lists";

const StarshipsPage = ({ history }) => {
  return (
    <ErrorBoundry>
      <StarshipList onItemSelected={id => history.push(id)} />
    </ErrorBoundry>
  );
};

export default withRouter(StarshipsPage);
