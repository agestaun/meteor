import React from "react";
import { Insets, View } from "react-native";

interface Props {
  insets: Insets;
}

const EndoSpaceDivider = ({ insets }: Props) => {
  const { top, right, left, bottom } = insets;
  return (
    <View
      style={{
        marginTop: top,
        marginBottom: bottom,
        marginLeft: left,
        marginRight: right,
      }}
    />
  );
};

export default EndoSpaceDivider;
