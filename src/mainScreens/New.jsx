import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import ActionModal from '../components/Actions/ActionModal';
import { useNavigation } from '@react-navigation/native';

const New = () => {
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState(false);

  const handleAddButtonPress = () => {
    setVisibleModal(true);
    console.log('Botão Adicionar pressionado!');
  };

  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const handleFormObra = () => {
    // Mensagem para indicar que o botão Nova Obra foi pressionado
    console.log('Botão Nova Obra pressionado!');
    
    // Oculta o modal quando o botão é pressionado
    setVisibleModal(false);
    
    // Obtém o estado de navegação atual
    const navigationState = navigation.getState();
    console.log('Estado de Navegação:', navigationState);
    
    // Verifica se há rotas no estado de navegação
    if (navigationState && navigationState.routes.length > 0) {
      // Procura a rota com o nome 'TelaNovaObra' no estado de navegação
      const stackNavigatorRoute = navigationState.routes.find(route => route.name === 'TelaNovaObra');
      console.log('Rota StackNavigator:', stackNavigatorRoute);
    
      // Verifica se a rota foi encontrada no estado de navegação
      if (stackNavigatorRoute) {
        // Navega para a rota 'TelaNovaObra' dentro do StackNavigator
        navigation.navigate('TelaNovaObra');
      }
    }
  };
  
  
  const handleMensagem = () => {
    setVisibleModal(false);
    alert("Novo comentário");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleAddButtonPress} style={styles.floatingButton}>
          <Entypo name="circle-with-plus" color="#0B006B" size={85} style={{ marginTop: -34 }} />
        </TouchableOpacity>
      </View>

      <ActionModal
        visible={visibleModal}
        handleClose={handleCloseModal}
        navigation={navigation}
        handleFormObra={handleFormObra}
        handleMensagem={handleMensagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 3,
    left: -40,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 0,
  },
});

export default New;
