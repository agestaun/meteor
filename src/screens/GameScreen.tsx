import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../styles/Colors";
import EndoCircle from "../components/EndoBall";
import useChronometer from "../hooks/useChronometer";
import useOnInactive from "../hooks/useOnInactive";
import { NavRouteList } from "../navigation/NavRouteList";

type Props = NativeStackScreenProps<NavRouteList, "Game">;

const DEFAULT_BALL_SIZE = 100;
const DEFAULT_BALL_SPEED = 1;
const MAX_PRESS_COUNT_GAME_OVER = 5;
const BALL_SIZE_REDUCTION_FACTOR = 0.8;
const BALL_SPEED_INCREASE_FACTOR = 5;

const GameScreen = ({ navigation }: Props) => {
  const { startChronometer, getElapsedTime } = useChronometer();
  const [totalPresses, setTotalPresses] = useState(0);
  const [ballSize, setBallSize] = useState(DEFAULT_BALL_SIZE);
  const [speed, setSpeed] = useState(1);

  useFocusEffect(
    useCallback(() => {
      resetGame();
    }, [])
  );

  useOnInactive(() => navigation.goBack());

  const resetGame = () => {
    setBallSize(DEFAULT_BALL_SIZE);
    setTotalPresses(0);
    setSpeed(DEFAULT_BALL_SPEED);
    startChronometer();
  };

  const onPressBall = () => {
    const gameOver = isGameOver(totalPresses + 1);
    if (gameOver) {
      onGameOver();
    } else {
      setBallSize(ballSize * BALL_SIZE_REDUCTION_FACTOR);
      setSpeed(speed * BALL_SPEED_INCREASE_FACTOR);
      setTotalPresses(totalPresses + 1);
    }
  };

  const isGameOver = (pressCount: number) => {
    return pressCount === MAX_PRESS_COUNT_GAME_OVER;
  };

  const onGameOver = () => {
    const scoreInMillis = getElapsedTime();
    navigation.navigate("GameOver", { scoreInMillis });
  };

  return (
    <View style={styles.container}>
      <EndoCircle
        size={ballSize}
        backgroundColor={Colors.dark.accent}
        onPress={onPressBall}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GameScreen;
