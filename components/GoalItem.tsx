import { Pressable, StyleSheet, Text, View } from 'react-native';
function GoalItem(props: { text: string; id: string; onDelete: (id: string) => void }) {
    return(
        
        <View style={styles.goalItem}>
          <Pressable 
          android_ripple={{color:"#511c96"}}
          style={({pressed}) => pressed && styles.pressedItem}
          onPress={() => props.onDelete(props.id)}>
          <Text style={styles.goalText}>
           {props.text}
          </Text>
          </Pressable>
        </View>
        
    );
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText:{
    color: 'white',
    padding: 8,
  },
  pressedItem:{
    opacity: 0.5,
    backgroundColor: "#141414",
  }
});