import {
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

let GameIsOver = ({userNumber, startNewGame, guessRounds}) => {
  const {width, height} = useWindowDimensions();
  let imageSize = 300;
  let marginVertical;
  if (width > height) {
    imageSize = 120;
    marginVertical = 0;
  }
  // if (height < 2400) {
  //   imageSize = 80;
  // }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginVertical: 0,
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.rootContainer}>
        <View style={[styles.textContainer, {marginVertical: marginVertical}]}>
          <Text style={styles.Text}>Game Over</Text>
        </View>

        {/* <PrimaryButton>Start New Game</PrimaryButton> */}
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require('../assets/images/flag.png')}
            style={{width: '75%', height: '75%'}}
            // resizeMode="cover"
          />
        </View>
        <View>
          <View>
            <Text style={styles.textContainer}>
              Your phone needed{' '}
              <Text style={styles.highlightText}>{guessRounds}</Text> rounds to
              guess the number{' '}
              <Text style={styles.highlightText}>{userNumber}</Text>
            </Text>
          </View>
          <View>
            <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default GameIsOver;
const styles = StyleSheet.create({
  Text: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    marginHorizontal: 80,
    // paddingTop: 10,
  },
  rootContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    // borderColor: 'yellow',
    // borderWidth: 2,
    // justifyContent: 'center',
    // alignContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    overflow: 'hidden',
    backgroundColor: '#a9defc',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  textContainer: {
    // backgroundColor: 'yellow',
    // borderWidth: 1,
    fontFamily: 'Montserrat',
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginVertical: 20,
  },
  highlightText: {
    fontFamily: 'Montserrat',
    color: '#72063c',
    fontWeight: 'bold',

    // fontSize: 36,
  },
});
