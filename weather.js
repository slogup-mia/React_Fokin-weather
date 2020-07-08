import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
// https://docs.expo.io/guides/icons/
// https://icons.expo.fyi/
// icon family = [ MaterialCommunityIcons, AntDesign, Entypo, FontAwesome, Ionicons.. 등 매우 많다. ]
// import { iconFamilyName } from "@expo/vector-icons"; 으로 임포트해서 사용



export default function Weather({temp, condition}){
    return <View style={styles.container}>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name="weather-rainy" size={120}/>
            <Text style={styles.temp}>{temp}°C</Text>
            <Text>{condition}</Text>
        </View>
        <View style={styles.halfContainer}>

        </View>
    </View>
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes
        .oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Mist','Smoke','Haze','Dust','Fog','Sand','Dust','Ash','Squall','Tornado', 'Clear', 'Clouds']
        ).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems: 'center'
    },
    halfContainer : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp:{
        fontSize:48
    }
});


