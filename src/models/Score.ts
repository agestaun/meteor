import { Instance, types } from "mobx-state-tree";

const Score = types.model({
  time: types.number,
});

export type ScoreInstance = Instance<typeof Score>;
export default Score;
