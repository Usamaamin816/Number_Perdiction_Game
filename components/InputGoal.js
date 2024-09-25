import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Modal, Image} from 'react-native';
function InputGoal(props) {
  const [enteredGoal, setEnteredGoal] = useState('');
  function inputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function CancelInputModal() {
    props.CancelVisibility(false);
  }
  function AddGoalInputHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
    CancelInputModal();
  }
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/pngwing.com.png')}
          style={{width: 100, height: 100}}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Enter Your Goal"
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{padding: 10}}>
            <Button title="Submit" onPress={AddGoalInputHandler}></Button>
          </View>
          <View style={{padding: 10}}>
            <Button title="Cancel" onPress={CancelInputModal}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // paddingBottom: 10,
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
    backgroundColor: '#1e085a',
    alignItems: 'center',
  },
  inputField: {
    borderWidth: 1,
    // flex: 2,
    width: '100%',
    // marginRight: 10,
    padding: 15,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',

    borderRadius: 5,
    // backgroundColor: 'blue',
  },
});
export default InputGoal;
