import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Import custom components
import Joke from "./JokeContainer";

import NotFound from "../Exception/NotFoundContainer";

const Jokes = ({ match }) => (
  <Fragment>
    <Switch>
      <Route exact path={`${match.url}`} component={Joke} />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Jokes;
