// @ts-nocheck
import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CompanyData from './components/CompanyData';
import UserData from './components/UserData';
import ExStyle from './style';
import InputGoal from './components/InputGoal';
import AddGoalInput from './components/AddGoalInput';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameIsOver from './screens/GameIsOver';
const App = () => {
  const [pickedNumber, setPickedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [startNewGame, setStartNewGame] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  // function ScreenHandler(number) {
  //   setPickedNumber(number);
  //   console.log('number', number);
  // }
  let ScreenHandler = number => {
    setPickedNumber(number);
    console.log('number', number);
  };
  function GameIsOverHandler(guessRoundsLength) {
    setGameIsOver(true);
    setGuessRounds(guessRoundsLength);
  }
  function startNewGameAfterOver() {
    setPickedNumber(null);
    setGameIsOver(false);
  }
  // function gameOverHandler(guessRoundsLength) {
  //   setGameIsOver(false);
  //   setGuessRounds(guessRoundsLength);
  // }

  let screen = <StartGameScreen screenHandler={ScreenHandler} />;
  console.log('pickedNumber', pickedNumber);
  if (pickedNumber) {
    screen = (
      <GameScreen userNumber={pickedNumber} gameIsOver={GameIsOverHandler} />
    );
  }
  if (gameIsOver && pickedNumber) {
    screen = (
      <GameIsOver
        userNumber={pickedNumber}
        startNewGame={startNewGameAfterOver}
        guessRounds={guessRounds}
      />
    );
  }
  return (
    <LinearGradient
      start={{x: 2, y: 0}}
      end={{x: 2, y: 1}}
      colors={['#3b021f', '#ddb52f']}
      style={styles.container}>
      <Text style={styles.textStyle}>Number Perdiction Game</Text>
      <ImageBackground
        source={require('./assets/images/diceBackground.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backGroundImage}>
        {/* <StartGameScreen /> */}
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ddb52f',
  },
  textStyle: {
    textAlign: 'center',
    // justifyContent: 'center',
    paddingVertical: 10,
    fontSize: 40,
    // fontWeight: 'bold',
    borderBottomColor: 'yellow',
    color: 'white',
    fontFamily: 'Montserrat',
    // borderWidth: ,
  },
  backGroundImage: {
    opacity: 0.15,
  },
});
// * This is the entry point of the React Native App.
// * It creates a UI with a Button and a FlatList.
// * The UI is padded from the edges of the screen.
// * The Button is used to add new goals to the FlatList.
// * The FlatList is used to display the goals.
// * The FlatList displays the goals in a scrollable list.
// * Each goal is represented by a Text component.
// * The Text component displays the text of the goal.
// * The Text component is rendered inside a Pressable component.
// * The Pressable component is used to add a delete button to each goal.
// * The Pressable component is used to delete the goal when it is pressed.
// * The Pressable component uses the onDelete method to delete the goal.
// * The onDelete method is passed to the AddGoalInput component as a prop.
// * The AddGoalInput component is used to render the delete button.
// * The AddGoalInput component is a functional component.
// * The AddGoalInput component receives the itemData and onDelete method as props.
// * The itemData is an object with a text property and an id property.
// * The onDelete method is a function that takes the id of the goal to delete.
// * The AddGoalInput component renders a Pressable component.
// * The Pressable component uses the onDelete method to delete the goal when it is pressed.
// * The Pressable component renders a Text component.
// * The Text component displays the text of the goal.
// * The Text component is rendered inside a View component.
// * The View component is used to add styling to the Text component.
// * The View component is rendered inside a Pressable component.
// * The Pressable component is used to add a delete button to each goal.
// * The Pressable component is used to delete the goal when it is pressed.
// * The Pressable component uses the onDelete method to delete the goal.
// * The onDelete method is passed to the AddGoalInput component as a prop.
// * The AddGoalInput component is used to render the delete button.
// * The AddGoalInput component is a functional component.
// * The AddGoalInput component receives the itemData and onDelete method as props.
// * The itemData is an object with a text property and an id property.
// * The onDelete method is a function that takes the id of the goal to delete.
// const App = () => {
//   const [addGoal, setAddGoal] = useState<string[]>([]);
//   const [isVisible, setIsVisible] = useState(false);
//   /**
//    * This method is used to add a new goal to the FlatList.
//    * @param EnteredGoal The text of the goal to add.
//    */
//   let AddGoals = (EnteredGoal: string) => {
//     if (EnteredGoal === '') {
//       alert('Please enter a goal!');
//       return;
//     }
//     try {
//       setAddGoal(existing => [
//         ...existing,
//         {text: EnteredGoal, id: Math.random().toString()} as any,
//       ]);
//     } catch (error) {
//       console.error('Error adding goal:', error);
//     }
//   };
//   /**
//    * This method is used to delete a goal from the FlatList.
//    * @param id The id of the goal to delete.
//    */
//   let deleteGoalsById = id => {
//     setAddGoal(existing => existing.filter(item => item.id !== id));
//   };
//   /**
//    * This method is used to enable the visibility of the InputGoal component.
//    */
//   let EnableVisibilty = () => {
//     setIsVisible(true);
//   };
//   /**
//    * This method is used to cancel the visibility of the InputGoal component.
//    * @param value The value of the visibility.
//    */
//   let CancelVisibility = value => {
//     setIsVisible(value);
//   };
//   return (
//     <View
//       style={{
//         flex: 1,
//         paddingTop: 50,
//         paddingHorizontal: 16,
//         backgroundColor: '#1e085a',
//       }}>
//       <Button title="Add new goal" onPress={EnableVisibilty} />
//       <InputGoal
//         onAddGoal={AddGoals}
//         isVisible={isVisible}
//         CancelVisibility={CancelVisibility}
//       />
//       <View style={{flex: 5}}>
//         <FlatList
//           data={addGoal}
//           renderItem={itemData => {
//             if (!itemData.item) {
//               return null;
//             }
//             return (
//               <AddGoalInput itemData={itemData} onDelete={deleteGoalsById} />
//             );
//           }}
//           alwaysBounceVertical={false}
//           keyExtractor={item => item?.id}
//         />
//       </View>
//     </View>
//   );
// };

// // * This function is the entry point of the React Native App.
// // * It creates a UI with a TextInput and a Button that is aligned horizontally.
// // * The UI is padded from the edges of the screen.
// // * The TextInput is given a placeholder string and the Button is given a title.
// // * The UI is wrapped in a root View.
// // */
// const App = () => {
//   const [enteredGoal, setEnteredGoal] = useState('');
//   const [addGoal, setAddGoal] = useState<string[]>([]);
//   function inputHandler(enteredText: any) {
//     setEnteredGoal(enteredText);
//   }
//   let AddGoals = () => {
//     setAddGoal(existing => [...existing, enteredGoal]);
//   };
//   return (
//     <View style={{flex: 1, paddingTop: 50, paddingHorizontal: 16}}>
//       {/* The View below is used to align the TextInput and the Button horizontally */}
//       <View style={styles.inputContainer}>
//         {/* The TextInput below is given a placeholder string */}
//         <TextInput
//           style={styles.inputField}
//           placeholder="Enter Your Name"
//           onChangeText={inputHandler}
//         />
//         {/* The Button below is given a title */}
//         <Button title="Submit" onPress={AddGoals}></Button>
//       </View>
//       {/* The empty View below is used to separate the inputField and the button */}
//       <View style={{flex: 5}}>
//         <ScrollView>
//           {addGoal.map((goal, index) => (
//             <Text key={index} style={styles.goalText}>
//               {`${index + 1}. ${goal}`}
//             </Text>
//           ))}
//         </ScrollView>
//       </View>
//       {/* The empty View below is used to separate the inputField and the button */}
//       <View></View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   inputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // backgroundColor: 'red',
//     // paddingBottom: 10,
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: '#cccccc',
//     alignItems: 'center',
//   },
//   inputField: {
//     borderWidth: 1,
//     // flex: 2,
//     width: '80%',
//     marginRight: 10,
//     padding: 10,
//     borderColor: '#cccccc',
//     borderRadius: 5,
//     // backgroundColor: 'blue',
//   },
//   goalText: {
//     margin: 8,
//     backgroundColor: 'blue',
//     borderRadius: 8,
//     fontSize: 30,
//     padding: 8,
//   },
// });

/**
//  * This is the main component of the app.
//  * It renders a blue View with three flexbox children:
//  *  - A red View with the text "1"
//  *  - A green View with the text "2"
//  *  - A purple View with the text "3"
//  *
//  * The children are arranged horizontally and are equally spaced.
//  * Each child is centered in its container.
//  */
// const App = () => {
//   return (
//     <View
//       style={{
//         padding: 50,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'stretch',
//         height: 300,
//         // width: '80%',
//         backgroundColor: 'blue',
//       }}>
//       {/* The red view */}
//       <View
//         style={{
//           backgroundColor: 'red',

//           flex: 2,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text>1</Text>
//       </View>

//       {/* The green view */}
//       <View
//         style={{
//           backgroundColor: 'green',

//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text>2</Text>
//       </View>

//       {/* The purple view */}
//       <View
//         style={{
//           backgroundColor: 'purple',
//           flex: 2,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// };
// /**
//  * This function is the entry point of the React Native App.
//  * It creates a UI with a TextInput and a Button that is aligned horizontally.
//  * The UI is padded from the edges of the screen.
//  * The TextInput is given a placeholder string and the Button is given a title.
//  * The UI is wrapped in a root View.
//  */
// const App = () => {
//   return (
//     <View style={{padding: 50}}>
//       {/* The View below is used to align the TextInput and the Button horizontally */}
//       <View style={styles.inputContainer}>
//         {/* The TextInput below is given a placeholder string */}
//         <TextInput style={styles.inputField} placeholder="Enter Your Name" />
//         {/* The Button below is given a title */}
//         <Button title="Submit"></Button>
//       </View>
//       {/* The empty View below is used to separate the inputField and the button */}
//       <View>
//         <Text>List of goals</Text>
//       </View>
//       {/* The empty View below is used to separate the inputField and the button */}
//       <View></View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   inputContainer: {
//     // flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   inputField: {
//     borderWidth: 1,
//     width: '80%',
//     marginRight: 10,
//     padding: 10,
//     borderColor: '#cccccc',
//     borderRadius: 5,
//   },
// });
// // this code will create simple form in react-naitve
// const App = () => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [display, setDisplay] = useState(false);
//   const clearForm = () => {
//     setName('');
//     setPassword('');
//     setEmail('');
//     setDisplay(false);
//   };
//   return (
//     <View>
//       <Text style={style.textBox}>CSS Style</Text>
//       <Text style={{fontSize: 30}}>Enter Name:</Text>
//       <TextInput
//         style={style.textBox}
//         value={name}
//         onChangeText={text => setName(text)}
//       />
//       <Text style={{fontSize: 30}}>Enter Email:</Text>
//       <TextInput
//         style={style.textBox}
//         onChangeText={text => setEmail(text)}
//         value={email}
//       />
//       <Text style={{fontSize: 30}}>Enter Password:</Text>
//       <TextInput
//         style={style.textBox}
//         onChangeText={text => setPassword(text)}
//         value={password}
//       />
//       <Button title="Submit" onPress={() => setDisplay(true)}></Button>
//       <Button title="Clear Form" onPress={clearForm}></Button>
//       <View>
//         {display ? (
//           <View>
//             <Text style={{fontSize: 30}}>{name}</Text>
//             <Text style={{fontSize: 30}}>{email}</Text>
//             <Text style={{fontSize: 30}}>{password}</Text>
//           </View>
//         ) : null}
//       </View>
//     </View>
//   );
// };

// getting value from TextInput for setting in a state
// const App = () => {
//   const [name, setName] = useState('');
//   return (
//     <View style={style.ViewBox}>
//       <Text style={style.textBox}>{name}</Text>
//       <Text style={style.textBox}>{name}</Text>
//       <Text style={style.textBox}>{name}</Text>
//       <Text style={style.textBox}>{name}</Text>
//       <Text style={ExStyle.container}>CSS Style</Text>
//       <TextInput
//         style={style.textBox}
//         placeholder="Enter Name"
//         value={name}
//         onChangeText={text => setName(text)}
//       />
//       <Button title="Clear Form" onPress={() => setName('')}></Button>
//     </View>
//   );
// };
const style = StyleSheet.create({
  textBox: {
    // backgroundColor: 'red',
    // padding: 15,
    fontSize: 30,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    width: 300,
    marginLeft: 50,
  },
  ViewBox: {
    backgroundColor: 'red',
    padding: 15,
    fontSize: 30,
    height: 500,
    textAlign: 'center',

    textAlignVertical: 'center',
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    width: 330,
    marginLeft: 42,
  },
});
// const setName = (value: any) => {
//   console.log(value);
//   setName(value);
// };

// const App = () => {
//   const [name, setName] = useState('Usama');
//   return (
//     <View>
//       <UserData />
//       <CompanyData />
//       <Text style={{fontSize: 30}}>{name}</Text>
//       <ChildComponent name={name} />
//       <Button title="Cancel" onPress={() => setName('Usama')}></Button>
//       <Button title="Continue" onPress={() => setName('Usman')}></Button>
//     </View>
//   );
// };
// const ChildComponent = (props: any) => {
//   return (
//     <View style={{backgroundColor: 'red', padding: 5}}>
//       <Text>Child Component</Text>
//       <Text>{props.name}</Text>
//     </View>
//   );
// };
// const setName = (value: any) => {
//   console.log(value);
//   setName(value);
// };
// const App = () => {
//   const [name, setName] = useState('Usama');
//   return (
//     <View>
//       <UserData />
//       <CompanyData />
//       <Text style={{fontSize: 30}}>{name}</Text>
//       <Button title="Cancel"></Button>
//       <Button title="Continue" onPress={() => setName('Usman')}></Button>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View>
//       <UserData />
//       <CompanyData />

//       <Button title="Cancel"></Button>
//       <Button title="Continue"></Button>
//     </View>
//   );
// };

export default App;
