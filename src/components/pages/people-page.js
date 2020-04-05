import React from "react";
import { withRouter } from "react-router-dom";

import ErrorBoundry from "../error-boundry";
import Row from "../row";
import { PersonList } from "../sw-components/item-lists";
import PersonDetails from "../sw-components/person-details";

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <ErrorBoundry>
      <Row
        left={<PersonList onItemSelected={id => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
    </ErrorBoundry>
  );
};

export default withRouter(PeoplePage);
