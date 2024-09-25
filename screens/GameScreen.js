import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useEffect, useState} from 'react';
// import Ionicons from '@react-native-vector-icons/ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import GuessLogItem from '../components/GuessLogItem';
// function generateRandomBetween(min, max, exclude) {
//   const rndNum = Math.floor(Math.random() * (max - min)) + min;
//   if (rndNum === exclude) {
//     return generateRandomBetween(min, max, exclude);
//   } else {
//     return rndNum;
//   }
// }
function generateRandomBetween(min, max, exclude) {
  // Check if range only contains the excluded number
  if (max - min <= 1 && exclude >= min && exclude < max) {
    throw new Error('No valid numbers to choose from!');
  }

  let rndNum = Math.floor(Math.random() * (max - min)) + min;

  // Prevent infinite recursion by using a loop instead of recursion
  while (rndNum === exclude) {
    rndNum = Math.floor(Math.random() * (max - min)) + min;
  }

  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;
let GameScreen = ({userNumber, gameIsOver}) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  );
  console.log('initialGuess', initialGuess);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gameRounds, setGameRounds] = useState([]);
  const {width, height} = useWindowDimensions();
  console.log('userNumber', userNumber);
  useEffect(() => {
    if (currentGuess === userNumber) {
      minBoundary = 1;
      maxBoundary = 100;
      gameIsOver(gameRounds.length);
    }
  }, [currentGuess, userNumber, gameIsOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that is wrong ...', [
        {text: 'Sorry', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
    setGameRounds(previousGuess => [...previousGuess, currentGuess]);

    console.log('guessArray', gameRounds);
  }
  let guessRoundsListLength = gameRounds.length;
  let paddingVertical = height < 1080 ? 0 : 30;
  let marginHorizontal = height < 1080 ? 0 : 30;
  let content = (
    <>
      <View>
        <Text style={styles.Text}>Opponent's Guess</Text>
      </View>
      <View
        style={[
          styles.guessView,
          {
            paddingVertical: paddingVertical,
            marginHorizontal: marginHorizontal,
          },
        ]}>
        <Text style={styles.guessText}>{currentGuess}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Text
            style={{
              // fontWeight: 'bold',
              textAlign: 'center',
              color: '#ddb52f',
              fontSize: 25,
            }}>
            Higher or Lower?
          </Text>
        </View>
        <View style={styles.buttonSubContainer}>
          <View style={{flex: 1}}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Icon name="minus" size={30} />
            </PrimaryButton>
          </View>
          <View style={{flex: 1}}>
            <View>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                <Icon name="plus" size={30} />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={gameRounds}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={item => item}
        />
        {/* {gameRounds.map(guessRound => (
        <Text key={guessRound}>{guessRound}</Text>
      ))} */}
      </View>
    </>
  );
  if (width > height) {
    content = (
      <>
        <View style={styles.rootContainerLandScape}>
          {/* <Text style={styles.Text}>Opponent's Guess</Text> */}
          <View style={styles.ContainerLandScape}>
            <View style={{flex: 1}}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Icon name="minus" size={30} />
              </PrimaryButton>
            </View>
            <View style={{flex: 1, paddingHorizontal: 10}}>
              <Text style={styles.guessTextStyleLandscape}>{currentGuess}</Text>
            </View>
            <View style={{flex: 1}}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                <Icon name="plus" size={30} />
              </PrimaryButton>
            </View>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={gameRounds}
              renderItem={itemData => (
                <GuessLogItem
                  roundNumber={guessRoundsListLength - itemData.index}
                  guess={itemData.item}
                />
              )}
              keyExtractor={item => item}
            />
          </View>
        </View>
      </>
    );
  }
  return <View style={styles.container}>{content}</View>;
};
export default GameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  Text: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
  },
  guessView: {
    borderWidth: 6,
    borderColor: '#ddb52f',
    // paddingVertical: {30},
    marginVertical: 20,
    // marginHorizontal: 30,
    borderRadius: 20,
  },
  guessText: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ddb52f',
  },
  buttonContainer: {
    backgroundColor: '#3b021f',
    padding: 15,
    borderRadius: 20,
    // paddingHorizontal: ,
    marginHorizontal: 22,
  },
  buttonSubContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  listContainer: {
    flex: 1,
    padding: 19,
  },
  rootContainerLandScape: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'yellow',
    // alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // alignContent: 'center',
  },
  ContainerLandScape: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guessTextStyleLandscape: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ddb52f',
    borderWidth: 4,
    borderColor: '#ddb52f',
    borderRadius: 20,
  },
});
