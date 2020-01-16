import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Tags react native não tem significado semântico... Não usamos id ou classes para aplicar estilo as tags...

export default function App() {
  return (
    
      <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.container}>
          <Text
            style={{
              backgroundColor: 'transparent',
              fontSize: 15,
              color: '#fff',
            }}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupar a tela toda
    backgroundColor: '#FFF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 25,
  }
});
