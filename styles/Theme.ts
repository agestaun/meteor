import { DefaultTheme } from "@react-navigation/native";
import Colors from "./Colors";

export default {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.dark.background,
    border: Colors.dark.accent,
    card: Colors.dark.surface,
    primary: Colors.dark.accent,
    text: Colors.dark.text,
  },
};
