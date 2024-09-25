import {Pressable, View, Text, StyleSheet} from 'react-native';

function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress} android_ripple={{color: 'yellow'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
let styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    // overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    // elevation: 10,
  },
});
export default PrimaryButton;
