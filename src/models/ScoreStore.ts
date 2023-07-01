import AsyncStorage from "@react-native-async-storage/async-storage";
import { cast, types } from "mobx-state-tree";
import AsyncStorageKey from "../enums/AsyncStorageKey";
import { persistObject } from "../utils/StorageUtils";
import Score, { ScoreInstance } from "./Score";

const MAX_SCORES_STORED = 10;

const ScoreStore = types
  .model("ScoreStore", {
    scores: types.array(Score),
  })
  .actions((self) => ({
    sortScoresAsc(scores: ScoreInstance[]): ScoreInstance[] {
      return scores.sort((a, b) => a.time - b.time);
    },

    setScores(scores: ScoreInstance[]) {
      self.scores = cast(scores);
    },
  }))
  .actions((self) => ({
    async afterCreate() {
      try {
        const scoresHistory = await AsyncStorage.getItem(
          AsyncStorageKey.SCORES
        );

        if (scoresHistory) {
          const scores = JSON.parse(scoresHistory);
          self.setScores(scores);
        }
      } catch (error) {
        console.error("Error loading scores from storage.", error);
      }
    },

    async addScore(timestamp: number) {
      const newScore = Score.create({ time: timestamp });
      // New array with the new score
      const updatedScores = [...self.scores, newScore];
      const sortedScores = self.sortScoresAsc(updatedScores);

      if (sortedScores.length > MAX_SCORES_STORED) {
        sortedScores.splice(MAX_SCORES_STORED); // Only the best 10 scores, the rest are removed from the array
      }

      self.setScores(sortedScores);
      await persistObject(AsyncStorageKey.SCORES, sortedScores);
    },
  }))
  .create();

export default ScoreStore;
