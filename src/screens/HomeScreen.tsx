import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { spacing } from "../../styles/Base";
import Colors from "../../styles/Colors";
import MeteorImg from "../assets/meteor.png";
import EndoTextTitle from "../components/EndoTextTitle";
import { NavRouteList } from "../navigation/NavRouteList";

type Props = NativeStackScreenProps<NavRouteList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const goToGame = () => navigation.navigate("Game");
  const goToScores = () => navigation.navigate("Scores");
  const goToSettings = () => navigation.navigate("Settings");

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.img} source={MeteorImg} />
        <EndoTextTitle>Welcome to Meteor!</EndoTextTitle>
        <View style={styles.actionsContainer}>
          <Button
            onPress={goToGame}
            title={"Play"}
            color={Colors.dark.accent}
          />
          <Button
            onPress={goToScores}
            title={"Score"}
            color={Colors.dark.accent}
          />
          <Button
            onPress={goToSettings}
            title={"Settings"}
            color={Colors.dark.accent}
          />
        </View>
      </View>
    </View>
  );
};

// TODO sort styles alphabetically
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 124,
    width: 124,
  },
  actionsContainer: { gap: spacing.md },
  contentContainer: {
    alignItems: "center",
    marginHorizontal: spacing.xl,
    gap: spacing.xxl,
  },
});

export default HomeScreen;
