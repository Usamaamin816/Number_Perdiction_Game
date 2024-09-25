import {Text, StyleSheet, Pressable} from 'react-native';
function AddGoalInput(props) {
  console.log(props, 'props');
  return (
    <Pressable
      android_ripple={{color: 'yellow'}}
      onPress={props.onDelete.bind(this, props.itemData.item.id)}>
      <Text style={styles.goalText}>
        {`${props.itemData.index + 1}. ${props.itemData.item.text}`}{' '}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  goalText: {
    margin: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
    fontSize: 30,
    padding: 8,
    color: 'white',
  },
});
export default AddGoalInput;
