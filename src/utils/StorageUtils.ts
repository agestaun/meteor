import AsyncStorage from "@react-native-async-storage/async-storage";

export const persistObject = async (key: string, value: object) => {
  const jsonData = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonData)
    .then(() => {
      console.log(`Object with key "${key}" successfully saved`);
    })
    .catch((reason) => {
      console.error(`Error saving object with key "${key}" as json.`, reason);
    });
};
