import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text style={{ fontSize: 17, color: "#fff", fontFamily: "serif" }}>
          {props.title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    marginVertical: 10,
    backgroundColor: "#468CFF",
    borderColor: "#468CFF",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default GoalItem;
