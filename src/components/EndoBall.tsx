import React, { useEffect, useRef } from "react";
import { ColorValue, Pressable, useWindowDimensions } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Coordinate from "../types/Coordinate";

interface Props {
  size: number;
  backgroundColor: ColorValue;
  onPress: () => void;
}

const EndoBall = ({ size, backgroundColor, onPress }: Props) => {
  const { width, height } = useWindowDimensions();
  const positionX = useSharedValue((width - size) / 2);
  const positionY = useSharedValue((height - size) / 2);
  const radius = useDerivedValue(() => size / 2);
  const speedX = useSharedValue(Math.random() * 4); // Random horizontal speed
  const speedY = useSharedValue(Math.random() * 8); // Random vertical speed. Multiplied by different number not to be the same as X and have different direction.
  const animationId = useRef<null | number>(null);

  useEffect(() => {
    // Cancel the current animation to update the size and keep it smooth.
    if (animationId.current) cancelAnimationFrame(animationId.current);

    updatePosition();
  }, [size]);

  const updatePosition = () => {
    const { x, y } = getNextPosition();

    // Check if the new position is crossing any edge. If so, reverses the direction to create the bounce effect.
    if (isHorizontalEdge(x)) speedX.value *= -1;
    if (isVerticalEdge(y)) speedY.value *= -1;

    // Update the shared values with the new coordinates. The duration is 0 because we control the speed with the speedX and speedY values.
    // Uses easing interpolation to keep the same speed from the beginning until the end of the animation.
    positionX.value = withTiming(x, { duration: 0, easing: Easing.linear });
    positionY.value = withTiming(y, { duration: 0, easing: Easing.linear });

    // Makes sure to call move before the next paint. This makes sure the animation is smooth.
    animationId.current = requestAnimationFrame(updatePosition);
  };

  // Returns the next position based on its current position and the speed values.
  const getNextPosition = (): Coordinate => {
    const x = positionX.value + speedX.value;
    const y = positionY.value + speedY.value;
    return { x, y };
  };

  // Checks whether the X axis crosses any horizontal border.
  const isHorizontalEdge = (x: number): boolean => {
    return x - radius.value < 0 || x + radius.value > width;
  };

  // Checks whether the Y axis crosses any vertical border.
  const isVerticalEdge = (y: number): boolean => {
    return y - radius.value < 0 || y + radius.value > height;
  };

  // The hook listens the changes and returns the new styles every time something changes.
  const ballStyle = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      borderRadius: radius.value,
      backgroundColor,
      transform: [
        { translateX: positionX.value - radius.value },
        { translateY: positionY.value - radius.value },
      ],
    };
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View style={ballStyle} />
    </Pressable>
  );
};

export default EndoBall;
