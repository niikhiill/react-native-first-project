import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = ()=>{
return(
<View style= {StyleSheet.ViewStyle}>
<ImageDetail title="Forest" imageSource= {require('../Assests/forest.jpg')} />
<ImageDetail title="Beach" imageSource= {require('../Assests/beach.jpg')}/>
<ImageDetail title="Mountain" imageSource= {require('../Assests/mountain.jpg')}/>
</View>
)
};

const Style = StyleSheet.create({
    ViewStyle: {
        paddingTop:100
    }
});

export default ImageScreen; 