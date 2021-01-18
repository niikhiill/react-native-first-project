import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListScreen from './ComponentsScreen/ListScreen'
import HomeScreen from './ComponentsScreen/HomeScreen';
import ImageScreen from './ComponentsScreen/ImageScreen';

const App = () =>{
  return(
<View style= {StyleSheet.ViewStyle} >
 <ImageScreen/>
</View>
  )
};

const Style = StyleSheet.create({
  ViewStyle: {
    paddingTop: 50
}
});

export default App;
