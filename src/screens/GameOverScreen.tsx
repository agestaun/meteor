import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { spacing } from "../../styles/Base";
import Colors from "../../styles/Colors";
import EndoTextTitle from "../components/EndoTextTitle";
import ScoreStore from "../models/ScoreStore";
import { NavRouteList } from "../navigation/NavRouteList";
import { timestampToSecondsAndMillis } from "../utils/DateUtils";

type Props = NativeStackScreenProps<NavRouteList, "GameOver">;

const GameOverScreen = ({ navigation, route }: Props) => {
  const { scoreInMillis } = route.params;
  const { width, height } = useWindowDimensions();
  const [scoreTime] = useState(timestampToSecondsAndMillis(scoreInMillis));

  useEffect(() => {
    ScoreStore.addScore(scoreInMillis);
  }, []);

  const goToGame = () => {
    navigation.goBack();
  };

  const goToHome = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ConfettiCannon
        count={200}
        fadeOut
        origin={{ x: width / 2, y: height }}
      />
      <EndoTextTitle>{`Score \n${scoreTime} seconds`}</EndoTextTitle>
      <Button
        onPress={goToGame}
        title={"Play again"}
        color={Colors.dark.accent}
      />
      <Button onPress={goToHome} title={"Exit"} color={Colors.dark.accent} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameOverScreen;
