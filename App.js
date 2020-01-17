import React from 'react';
import { StatusBar } from 'react-native';
// Tags react native não tem significado semântico... Não usamos id ou classes para aplicar estilo as tags...

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle='ligth-content' backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}
