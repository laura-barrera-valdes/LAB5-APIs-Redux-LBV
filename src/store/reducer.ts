import { Actions, AppState, TripsActions } from "../types/store";

export const reducer = (
  currentAction: Actions,
  currentState: AppState
): AppState => {
  const { action, payload } = currentAction;

  switch (action) {
    case TripsActions.GET:
      return {
        ...currentState,
        characters: payload,
      };

    default:
      return currentState;
  }
};
