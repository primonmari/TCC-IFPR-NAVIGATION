
// No componente AddWorkScreen
const AddWorkScreen = ({ navigation }) => {

  const handleFormObra = () => {
    // Navega para a tela 'NovaObra' usando o navigation.navigate 
    navigation.navigate('NovaObra');
  };

  return (
    <StackRoutes navigation={navigation} handleFormObra={handleFormObra} />
  );
};


export default AddWorkScreen;
