import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { fonts, radius, spacing } from "../../styles/Base";
import Colors from "../../styles/Colors";
import EndoCard from "../components/EndoCard";
import EndoSpaceDivider from "../components/EndoSpaceDivider";
import EndoTextCaption from "../components/EndoTextCaption";
import { ScoreInstance } from "../models/Score";
import ScoreStore from "../stores/ScoreStore";
import { timestampToSecondsAndMillis } from "../utils/DateUtils";

const ScoresScreen = () => {
  const emptyView = () => (
    <EndoCard style={styles.noScoresContainer}>
      <EndoTextCaption>No Scores yet!</EndoTextCaption>
    </EndoCard>
  );

  const renderItem = ({ item, index }: ListRenderItemInfo<ScoreInstance>) => {
    const formattedTime = timestampToSecondsAndMillis(item.time);
    const backgroundColor = index ? Colors.dark.surface : Colors.dark.accent;
    const title = index ? "Time" : "Best time";
    return (
      <EndoCard style={[styles.itemCard, { backgroundColor }]}>
        <EndoTextCaption left style={styles.text}>
          {title}
        </EndoTextCaption>
        <Text style={styles.text}>{`${formattedTime} seconds`}</Text>
      </EndoCard>
    );
  };

  const renderRowSeparator = () => (
    <EndoSpaceDivider insets={{ bottom: spacing.sm }} />
  );

  const renderHeaderSeparator = () => (
    <EndoSpaceDivider insets={{ bottom: spacing.md }} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListEmptyComponent={emptyView()}
        ListHeaderComponent={renderHeaderSeparator}
        ItemSeparatorComponent={renderRowSeparator}
        data={ScoreStore.scores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemCard: {
    gap: spacing.sm,
    padding: spacing.md,
    marginHorizontal: spacing.md,
  },
  noScoresContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.lg,
    paddingVertical: spacing.xxl,
    margin: spacing.md,
    backgroundColor: Colors.dark.surface,
  },
  text: {
    fontSize: fonts.size.lg,
    color: Colors.dark.text,
  },
});

export default ScoresScreen;
