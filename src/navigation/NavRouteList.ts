// Any new screen/route and param must be defined here for type checking.
export type NavRouteList = {
  Home: undefined;
  Game: undefined;
  GameOver: { scoreInMillis: number };
  Scores: undefined;
  Settings: undefined;
};

// This registers which makes navigation fully type-safe. I need to skip some eslint rules here.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // This is needed to overwrite the default type
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends NavRouteList {}
  }
}
