import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableHighlight,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle, setGoalTitle) => {
    if (goalTitle === "") return;
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    setGoalTitle("");
    setIsAddMode(false);
  };

  const deleteGoalHandler = (goalKey) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  const cancelGoalModeHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>My Goal Log</Text>

        <TouchableHighlight
          onPress={() => setIsAddMode(true)}
          style={{ borderRadius: 7 }}
        >
          <View
            style={{
              backgroundColor: "black",
              padding: 12,
              paddingRight: 20,
              paddingLeft: 20,
              borderRadius: 7,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 17,
              }}
            >
              Add New Goal
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <GoalInput
        visible={isAddMode}
        addHandler={addGoalHandler}
        onCancel={cancelGoalModeHandler}
      />
      <FlatList
        data={courseGoals}
        style={{ marginTop: 10 }}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={deleteGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },

  text: {
    marginBottom: 20,
    fontSize: 35,
    textAlign: "center",
    fontFamily: "serif",
  },
});
