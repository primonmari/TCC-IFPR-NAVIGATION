import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddWorkScreen from '../components/routesComponents/AddWorkScreen';
import AddWork from '../screens/Forms/AddWork';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TelaNovaObra'
        component={AddWorkScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='NovaObra'
        component={AddWork}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
