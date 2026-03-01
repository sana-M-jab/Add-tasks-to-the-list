import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";
function GoalInput(props: { onAddGoal: (enteredGoalText: string) => void; visible: boolean; onCancel: () => void }) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal  visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")}/>
        <TextInput style={styles.input} placeholder='your course goal!' onChangeText={goalInputHandler} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );

}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#311b6b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    color: '#120438',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    padding: 16,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 16,
    width: '100%',
    justifyContent: "center",
    flexDirection: 'row',
  },
  button: {
    width: "40%",
    marginHorizontal: 8
  },
  image:{
    width: 100,
    height: 100,
      margin: 20
  }
})