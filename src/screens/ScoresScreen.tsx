import React from "react";
import { FlatList, Text } from "react-native";

const ScoresScreen = () => {
  return (
    <FlatList
      contentInsetAdjustmentBehavior="automatic"
      ListEmptyComponent={<Text>Empty list</Text>}
      data={null}
      renderItem={null}
    />
  );
};

export default ScoresScreen;
