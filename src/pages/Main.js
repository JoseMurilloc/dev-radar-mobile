import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import { MaterialIcons } from '@expo/vector-icons';

import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';

function Main({ navigation }) {

  const [ currentRegion , setCurrentRegion ] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if(granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
        });

      }
    }

    loadInitialPosition();
  }, []);


  if(!currentRegion) {
    return null;
  }


  return (
    <>
      <MapView initialRegion={currentRegion} style={styles.map} >
      <Marker coordinate={{ latitude: -9.3624657, longitude: -40.5509536}} >
        <Image style={styles.avatar} source={{ uri: 'https://avatars1.githubusercontent.com/u/43470555?s=460&v=4' }} />
        {/* Tudo que iremos colocar aqui é o que vai acontecer quando o usuário digitar */}
        <Callout onPress={() => {
          // Nagetação
          navigation.navigate('Profile', { github_username: 'JoseMurilloc' });

        }}>
          <View style={styles.callout}>
            <Text style={styles.devName}>José Murillo</Text>
            <Text style={styles.devBio}>Desenvolvedor back end jr com nodejs, com habilidades em ReactJS - Cursando ciência da computação.
</Text>
            <Text style={styles.devTechs}>NodeJS, Git, ReactJS</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>

      <View style={styles.seachForm} >
        <TextInput style={styles.seachInput} placeholder='Buscar devs por techs' placeholderTextColor='#999' autoCapitalize='words' autoCorrect={false} />

        <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
          <MaterialIcons name='my-location' size={20} color='#FFF' />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  seachInput: {
    flex: 1,
    textAlign: 'center',
    height: 50,
    color: '#333',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    // paddingVertical: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    }
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8e4dff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  seachForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },
  map: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,

  },
  devBio: {
    color: '#666',
  },
  devTechs: {
    marginTop: 5,
  }
})

export default Main;