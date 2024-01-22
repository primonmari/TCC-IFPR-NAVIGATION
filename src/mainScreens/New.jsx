// Importa as bibliotecas 
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';
import ActionModal from '../components/Actions/ActionModal';

// Define e exporta o componente funcional New
const New = ({ navigation }) => {
  console.log('Valor de navigation em New:', navigation);
  const [visibleModal, setVisibleModal] = useState(false);

  // Função chamada quando o botão de adicionar é pressionado
  const handleAddButtonPress = () => {
    setVisibleModal(true);
    console.log('Botão Adicionar pressionado!');
  };

  // Função chamada para fechar o modal
  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  // Função chamada quando o botão de comentário é pressionado
  const handleFormObra = () => {
    setVisibleModal(false);
    navigation.navigate('NovaObra');
  };

  // Função chamada quando o botão de comentário é pressionado
  const handleMensagem = () => {
    setVisibleModal(false);
    alert("Novo comentário");
  };

  // Renderiza o componente
  return (
    <View style={styles.container}>
      {/* Container para posicionar o botão flutuante */}
      <View style={styles.buttonsContainer}>
        {/* Botão flutuante de adicionar */}
        <TouchableOpacity onPress={handleAddButtonPress} style={styles.floatingButton}>
          <Entypo name="circle-with-plus" color="#0B006B" size={85} style={{ marginTop: -34 }} />
        </TouchableOpacity>
      </View>

      {/* Chama o componente ActionModal diretamente no componente New */}
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
  // Estilos do componente
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
