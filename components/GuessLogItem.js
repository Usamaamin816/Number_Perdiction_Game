import {View, Text, StyleSheet} from 'react-native';

const GuessLogItem = ({guess, roundNumber}) => {
  return (
    <View style={styles.rootConatiner}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess:{guess} </Text>
    </View>
  );
};
export default GuessLogItem;
const styles = StyleSheet.create({
  rootConatiner: {
    backgroundColor: '#ddb52f',
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    elevation: 4,
    // shadowColor: 'red',
    // shadowOffset: {width: 30, height: 30},
    // shadowOpacity: 0.5,
    // shadowRadius: 3,
  },
  text: {
    color: '#72063c',
    fontWeight: '500',
    fontSize: 18,
  },
});
