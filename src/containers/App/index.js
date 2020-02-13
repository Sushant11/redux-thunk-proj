import React, { Fragment } from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import {
  AsyncAppLayout,
  AsyncInternalServer,
  AsyncNotFound,
  AsyncForbidden,
  AsyncJokes
} from "./AsyncComponent";
import PublicRoute from "../../route/PublicRoute";

const App = () => (
  <Fragment>
    <Switch>
      <PublicRoute
        exact
        path="/"
        layout={AsyncAppLayout}
        component={AsyncJokes}
      />
      <PublicRoute path="/403"  layout={AsyncAppLayout} component={AsyncForbidden} />
      <PublicRoute path="/500"  layout={AsyncAppLayout} component={AsyncInternalServer} />
      <Route path="/404"  layout={AsyncAppLayout} component={AsyncNotFound} />
      <Route component={AsyncNotFound} />
    </Switch>
  </Fragment>
);

export default withRouter(App);
