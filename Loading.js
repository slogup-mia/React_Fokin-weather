import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle='dark-content'/>
        <Text style={styles.text}>Getting the Foking Weather </Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingVertical:100,
        paddingHorizontal: 30,
        backgroundColor: "#FEF6AA"
    },
    text:{
      color: "#181818",
        fontSize: 30
    }
})