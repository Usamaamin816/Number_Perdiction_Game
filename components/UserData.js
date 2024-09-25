import {Text, View} from 'react-native';
let name = 'Usama';
let Age = 25;
let Phone = '03166765267';
const UserData = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>{name}</Text>
      <Text style={{fontSize: 30}}>{Age}</Text>
      <Text style={{fontSize: 30}}>{Phone}</Text>
    </View>
  );
};
export default UserData;
