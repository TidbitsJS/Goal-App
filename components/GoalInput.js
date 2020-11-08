import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <TouchableOpacity style={styles.touchable}>
          <View style={styles.button}>
            <Button
              title="add goal"
              onPress={() => props.addHandler(enteredGoal, setEnteredGoal)}
            />
          </View>
          <View style={styles.button}>
            <Button title="not now" color="red" onPress={props.onCancel} />
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderColor: "#468CFF",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    width: "80%",
    borderRadius: 25,
    fontSize: 17,
    fontFamily: "serif",
  },

  touchable: {
    marginTop: 20,
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  button: {
    width: "40%",
  },
});

export default GoalInput;
