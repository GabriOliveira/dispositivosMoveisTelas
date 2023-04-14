import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import imagem from './perfilft.jpg';
export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      flexDirection : 'row',
    
    }
  });

  return (
    <View style={styles.container}>
      <Image source={imagem} style={{width : 250, height : 250, borderRadius : 150}}></Image>
      

      <Text style={{backgroundColor : 'pink', color : 'blue'}}> Josuke Higashigata</Text>
      
    </View>

  )
}
