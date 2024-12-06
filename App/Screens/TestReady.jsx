import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import ChecklistCard from "../Components/ChecklistCard";

const TestReady = () => {
  const [completedItems, setCompletedItems] = useState({});

  const cards = [
    {
      title: "Route Practice",
      checklists: ["Complete routes 3 times", "Notice road speed variations"],
    },
    {
      title: "Roundabout Skills",
      checklists: ["Watch tutorials", "Practice moves", "Build confidence"],
    },
    {
      title: "Knowledge Prep",
      checklists: [
        'Learn "show me"',
        'Pass "tell me" tests',
        "Master road signs",
      ],
    },
    {
      title: "Driving Maneuvers",
      checklists: [
        "Parallel parking",
        "Reverse bay",
        "Forward bay",
      ],
    },
    {
      title: "Road Awareness",
      checklists: ["Meeting situations video", "Joining road techniques"],
    },
    {
      title: "Test Day",
      checklists: ["Test protocol", "Examiner marking", "Understand faults"],
    },
  ];

  const toggleChecklistItem = (cardIndex, itemIndex) => {
    setCompletedItems((prev) => {
      const cardCompleted = { ...(prev[cardIndex] || []) };
      cardCompleted[itemIndex] = !(cardCompleted[itemIndex] || false);
      return { ...prev, [cardIndex]: cardCompleted };
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Driving Test Prep</Text>
      <FlatList
        data={cards}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.cardContainer}
        renderItem={({ item, index }) => (
          <ChecklistCard
            title={item.title}
            checklists={item.checklists}
            completedItems={completedItems}
            toggleChecklistItem={toggleChecklistItem}
            cardIndex={index}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    paddingVertical: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: "#2c3e50",
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
});

export default TestReady;
