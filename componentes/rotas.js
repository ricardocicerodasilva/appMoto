import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../componentes/home'; 
import CadastrarMotos from './cadastrarMotos';
import AlterarMotos from './alterarMoto'; 

const Stack = createStackNavigator();
export default function Rotas(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="cadastrarMoto" component={CadastrarMotos} /> {/* Corrigido aqui */}
      <Stack.Screen name="alterarMoto" component={AlterarMotos} />
    </Stack.Navigator>
  );
}
