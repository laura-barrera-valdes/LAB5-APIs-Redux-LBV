import { Character } from "./character";
export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  characters: Character[];
};

export enum TripsActions {
  "GET" = "GET",
}

export interface GetCharactersAction {
  action: TripsActions.GET;
  payload: Character[];
}

export type Actions = GetCharactersAction;
