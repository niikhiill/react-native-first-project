import React from 'react';
import { Text, View, StyleSheet, Image} from "react-native";

const ImageDetail = (props)=>{
return(
<View style= {Style.ViewStyle}>
<Image source={props.imageSource} />
<Text>{props.title}</Text>
</View>
)
};

const Style = StyleSheet.create({
ViewStyle: {
    paddingTop: 100
}
});

export default ImageDetail; 