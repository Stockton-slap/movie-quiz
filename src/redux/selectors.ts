import { RootState } from "./store";

export const selectRounds = (state: RootState) => state.rounds.rounds
