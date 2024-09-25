import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useState} from 'react';
let StartGameScreen = ({screenHandler}) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const numberInputHandler = inputText => {
    setEnteredNumber(inputText);
  };
  const resetInputHandler = () => {
    setEnteredNumber('');
  };
  const confirmInputNumber = () => {
    const chooseNumber = parseInt(enteredNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number and greater than 0.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    screenHandler(chooseNumber);
  };
  return (
    <View style={styles.outerContainer}>
      <TextInput
        value={enteredNumber}
        style={styles.inputContainer}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        onChangeText={numberInputHandler}
        autoCorrect={false}></TextInput>
      <View style={styles.buttonOuterContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputNumber}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
let styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 15,
    marginHorizontal: 20,
    backgroundColor: '#3b021f',
    marginVertical: 50,
    borderRadius: 20,
    height: 150,
    // width: '80%',
  },
  inputContainer: {
    width: 50,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',

    color: '#ddb52f',
    // marginBottom: 10,
  },
  buttonOuterContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    // padding: 10,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // color: 'white',
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
