import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorageKey from "../src/enums/AsyncStorageKey";
import { persistObject } from "../src/utils/StorageUtils";
import Mock = jest.Mock;

describe("Storage Utils Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "log").mockImplementation();
    jest.spyOn(console, "error").mockImplementation();
  });

  describe("Persist Object Tests", () => {
    const key = AsyncStorageKey.SCORES;
    const value = { time: Date.now() };
    const jsonData = JSON.stringify(value);

    it("should persist the object with the correct key and value", async () => {
      await persistObject(key, value);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(key, jsonData);
      expect(console.log).toHaveBeenCalledWith(
        `Object with key "${key}" successfully saved`
      );
      expect(console.error).not.toHaveBeenCalled();
    });

    it("should log an error message if saving the object fails", async () => {
      const errorMsg = "Failed to save object";

      const mockedSetItem = AsyncStorage.setItem as Mock;
      mockedSetItem.mockRejectedValueOnce(errorMsg);

      await persistObject(key, value);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        key,
        JSON.stringify(value)
      );
      expect(console.log).not.toHaveBeenCalled();
      expect(console.error).toHaveBeenCalledWith(
        `Error saving object with key "${key}" as json.`,
        errorMsg
      );
    });
  });
});
