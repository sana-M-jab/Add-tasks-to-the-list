import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from '../../components/GoalInput';
import GoalItem from '../../components/GoalItem';
export default function HomeScreen() {
  const [ModalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<{ text: string; id: string }[]>([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((currentCourseGoals) =>
      [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() }
      ]
    );
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCourseGoals) => currentCourseGoals.filter(goal => goal.id !== id));
  }
  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <Button title="Add New Goal" color="#a570e9" onPress={startAddGoalHandler} />
        <GoalInput visible={ModalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals}
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteGoalHandler} />;
            }}
            keyExtractor={(item, index) => {
              return (item.id)
            }}
            alwaysBounceVertical={false} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    paddingTop: 24,
    flex: 5
  },

});