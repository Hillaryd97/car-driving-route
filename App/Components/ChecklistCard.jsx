import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Checkbox } from "react-native-paper";

const ChecklistCard = ({
  title,
  checklists,
  completedItems,
  toggleChecklistItem,
  cardIndex,
}) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {checklists.map((checklist, checklistIndex) => (
        <View key={checklistIndex} style={styles.checklistItem}>
          <Checkbox
            status={
              completedItems[cardIndex]?.[checklistIndex]
                ? "checked"
                : "unchecked"
            }
            onPress={() => toggleChecklistItem(cardIndex, checklistIndex)}
          />
          <Text style={styles.checklistText}>{checklist}</Text>
        </View>
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 4,
    backgroundColor: "#FFF9C4",
    elevation: 3,
    borderRadius: 12,
    padding: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  checklistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  checklistText: {
    fontSize: 14,
    color: "#34495e",
  },
});

export default ChecklistCard;
