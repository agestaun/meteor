import React, { memo } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { radius } from "../../styles/Base";

import Colors from "../../styles/Colors";

interface Props extends ViewProps {
  borderRadius?: number;
}

const EndoCard = ({
  children,
  borderRadius = radius.lg,
  style,
  ...props
}: Props) => {
  return (
    <View style={[styles.card, { borderRadius }, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.dark.surface,
  },
});

export default memo(EndoCard);
