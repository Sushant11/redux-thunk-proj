import loadable from "@loadable/component";

export const AsyncAppLayout = loadable(() => import("../../components/Layout"));

export const AsyncJokes = loadable(() => import('../../containers/Jokes/'));

export const AsyncInternalServer = loadable(() =>
  import("../../containers/Exception/InternalServerContainer")
);
export const AsyncNotFound = loadable(() =>
  import("../../containers/Exception/NotFoundContainer")
);
export const AsyncForbidden = loadable(() =>
  import("../../containers/Exception/ForbiddenContainer")
);
