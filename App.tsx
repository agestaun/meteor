import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";
import { NavRouteList } from "./src/navigation/NavRouteList";
import GameOverScreen from "./src/screens/GameOverScreen";
import GameScreen from "./src/screens/GameScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ScoresScreen from "./src/screens/ScoresScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import Colors from "./styles/Colors";
import Theme from "./styles/Theme";

const Stack = createNativeStackNavigator<NavRouteList>();

const App = () => {
  const stackNavigatorOptions: NativeStackNavigationOptions = {
    headerLargeTitle: true,
    headerLargeTitleStyle: { color: Colors.dark.primary },
  };

  return (
    <NavigationContainer
      theme={Theme}
      onReady={() => console.log("Navigation container ready!")}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.dark.background}
        animated={true}
      />
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={stackNavigatorOptions}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ headerShown: false, animation: "fade" }}
        />
        <Stack.Group screenOptions={{ statusBarColor: Colors.dark.surface }}>
          <Stack.Screen name="Scores" component={ScoresScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Group>
        <Stack.Screen
          name="GameOver"
          component={GameOverScreen}
          options={{ headerShown: false, animation: "fade" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
