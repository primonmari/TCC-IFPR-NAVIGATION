// Importe as bibliotecas
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from '../routes/tab.routes';

// Defina o componente funcional Routes
export default function Routes() {
  // Retorna a estrutura de navegação
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
