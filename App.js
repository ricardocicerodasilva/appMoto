import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './componentes/rotas'; // Corrigi para Rotas, já que esse é o nome do seu componente de rotas

 function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}
export default App;