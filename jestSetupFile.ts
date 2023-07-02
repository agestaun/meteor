import mock from "@react-native-async-storage/async-storage/jest/async-storage-mock";

// Mocking AsyncStorage.
jest.mock("@react-native-async-storage/async-storage", () => mock);
