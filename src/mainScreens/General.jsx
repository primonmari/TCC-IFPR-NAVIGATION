import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const General = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>GERAL</Text>
      <Text
        onPress={() => navigation.navigate('General')}
      > CONFIGURAÇÕES</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize:22,
    fontWeight: 'bold',
    marginBottom: 20
  }
});


export default General;