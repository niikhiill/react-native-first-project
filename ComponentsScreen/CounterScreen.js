import React from 'react';
import {useState} from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () =>{

    const [counter, setCounter] = useState(0);

    return(
        <View style = {Style.ViewStyle} >
            <Button  title= "Increase" 
            onPress={()=> {
                setCounter(counter+1);
            }}
            />

            <Button  title= "Decrease" 
            onPress={()=> {
                setCounter(counter-1);
            }}
            />

            <Text style = {Style.textStyle} >Current  Count: {counter}</Text>
        </View>
    )
};

const Style = StyleSheet.create({
ViewStyle: {
    flex: 1, justifyContent: "center" 
}
});

export default CounterScreen;