import React, { memo } from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import { fonts } from "../../styles/Base";
import Colors from "../../styles/Colors";

interface EndoTextProps extends TextProps {
  left?: boolean;
  right?: boolean;
}

const EndoTextTitle = ({
  left,
  right,
  children,
  style,
  ...props
}: EndoTextProps) => {
  const textAlign = left ? "left" : right ? "right" : "center";

  return (
    <Text {...props} style={[styles.text, style, { textAlign }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.dark.text,
    fontSize: fonts.size["2xl"],
    fontWeight: "bold",
  },
});

export default memo(EndoTextTitle);
