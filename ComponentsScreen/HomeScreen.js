import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
    return (
        <View style = {Style.ViewStyle} > 
            <Text>HomeScreen</Text>
            <Button 
            onPress= {()=> console.log('Button Pressed')}
            title="Go to Components demo" />

            <TouchableOpacity
            onPress= {() => console.log('List Pressed')}>
            <Text>Go to List Demo</Text>    
            </TouchableOpacity>
        </View>
    )
}

const Style = StyleSheet.create({
 ViewStyle: {
     paddingTop: 50
 }
});

export default HomeScreen;