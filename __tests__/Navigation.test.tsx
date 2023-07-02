import { render } from "@testing-library/react-native";
import React from "react";
import App from "../App";

describe("Navigation Tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
  });

  test("should render HomeScreen by default after launching the app", () => {
    const { getByText } = render(<App />);
    const homeScreenElement = getByText("Welcome to Meteor!");
    expect(console.log).toHaveBeenCalledWith("Navigation container ready!");
    expect(homeScreenElement).toBeTruthy();
  });

  // TODO more tests...
});
