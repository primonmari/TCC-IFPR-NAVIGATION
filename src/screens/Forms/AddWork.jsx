import { StyleSheet, Text, View } from 'react-native';

export default function AddWork() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORMULÁRIO NOVA OBRA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:22,
    fontWeight: 'bold'
  }
});
