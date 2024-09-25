import {Text, View} from 'react-native';
let name = 'XoomMaps';
let totalEmployees = 100;
let revenue = 10000;
const CompanyData = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>{name}</Text>
      <Text style={{fontSize: 30}}>{totalEmployees}</Text>
      <Text style={{fontSize: 30}}>{revenue}</Text>
    </View>
  );
};
export default CompanyData;
