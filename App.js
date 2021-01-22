import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListScreen from './ComponentsScreen/ListScreen'
import HomeScreen from './ComponentsScreen/HomeScreen';
import ImageScreen from './ComponentsScreen/ImageScreen';
import CounterScreen from "./ComponentsScreen/CounterScreen";
import ColorScreen from "./ComponentsScreen/ColorScreen";
import TextScreen from "./ComponentsScreen/TextScreen";

const App = () =>{
  return(
<View style={Style.ViewStyle}>
 <TextScreen/>
</View>
  )
};

const Style = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    paddingTop: 50
}
});

export default App;
