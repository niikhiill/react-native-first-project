import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{
const languages=[
  {name: 'c++'},
  {name: 'java'},
  {name: 'javascript'},
  {name: 'python'},
  {name: 'css'},
  {name: 'html'},
  {name: 'php'},
  {name: 'typescript'},
  {name: 'kotlin'}
];

    return (
    <FlatList 
   //horizontal
    //showsHorizontalScrollIndicator= {false}
    data={languages}
    keyExtractor = {language => language.name}
    renderItem={({ item }) => {
return <Text style= {Styles.TextStyle} >{item.name}</Text>
    }}
    />
    );
};

const Styles = StyleSheet.create({
TextStyle: {
    paddingTop: 20,
    paddingLeft: 20,
    marginVertical: 50

}
});

export default ListScreen;