import React from 'react';
import { Text, View, StyleSheet } from "react-native";

const ImageDetail = (props)=>{
return(
<View style= {StyleSheet.ViewStyle}>
<Text>{props.title}</Text>
</View>
)
};

const Style = StyleSheet.create({
ViewStyle: {
    paddingTop: 30
}
});

export default ImageDetail; 