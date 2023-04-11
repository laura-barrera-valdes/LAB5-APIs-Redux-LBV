import { getData } from "../services/fetch";
import { GetTripsAction, TripsActions } from "../types/store";

export const getCharacters = async (): Promise<GetTripsAction> => {
  const characters = await getData();
  return {
    action: TripsActions.GET,
    payload: characters,
  };
};
