import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
    // https://docs.expo.io/guides/icons/
    // https://icons.expo.fyi/
    // icon family = [ MaterialCommunityIcons, AntDesign, Entypo, FontAwesome, Ionicons.. 등 매우 많다. ]
    // import { iconFamilyName } from "@expo/vector-icons"; 으로 임포트해서 사용
import { LinearGradient } from 'expo-linear-gradient';
    // expo install expo-linear-gradient
    // https://docs.expo.io/versions/latest/sdk/linear-gradient/
    // 그라디언트 만들기 :

const weatherOptions = {
    Thunderstorm : { iconName : 'weather-lightning', colors: ['#636363','#a2ab58']},
    Drizzle : { iconName : 'weather-hail', colors: ['#74ebd5','#ACB6E5']},
    Rain : { iconName : 'weather-rainy', colors: ['#36D1DC','#5B86E5']},
    Snow : { iconName : 'weather-snowy', colors: ['#E0EAFC','#CFDEF3']},
    Mist : { iconName : 'weather-fog', colors: ['#ada996','#f2f2f2','#dbdbdb','#eaeaea']},
    Smoke : { iconName : 'weather-fog', colors: ['#616161','#9bc5c3']},
    Haze : { iconName : 'weather-hazy', colors: ['#77A1D3','#79CBCA','#E684AE']},
    Dust : { iconName : 'weather-hazy', colors: ['#649173','#DBD5A4']},
    Fog : { iconName : 'weather-fog', colors: ['#283048','#859398']},
    Sand : { iconName : 'weather-hazy', colors: ['#3E5151','#DECBA4']},
    Ash : { iconName : 'weather-hazy', colors: ['#606c88','#3f4c6b']},
    Squall : { iconName : 'weather-tornado', colors: ['#2980B9','#6DD5FA','#ffffff']},
    Tornado : { iconName : 'weather-hurricane', colors: ['#4B79A1','#283E51'] , subtitle:"Stay inside, Save yourself"},
    Clear : { iconName : 'weather-sunny', colors: ['#2980B9','#6DD5FA','#ffffff'], subtitle:"Why do not Go out and Chill?"    },
    Clouds : { iconName : 'weather-cloudy', colors: ['#77A1D3','#79CBCA']},
}

export default function Weather({temp, condition}){
    return(
            <LinearGradient
                colors={weatherOptions[condition].colors}
                style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={120} color='white'/>
                    <Text style={styles.temp}>{temp}°C</Text>
                </View>
                {/* 여러 style을 적용할 때 아래와 같이 사용  */}
                <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                    <Text style={styles.title}>{ condition }</Text>
                    <Text style={styles.subtitle}>{ weatherOptions[condition].subtitle || 'Check Weather, Have a nice day ' }</Text>
                </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes
        .oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Mist','Smoke','Haze','Dust','Fog','Sand','Ash','Squall','Tornado', 'Clear', 'Clouds']
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
        fontSize:48,
        color: 'white'
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle:{
        color:"white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems: 'flex-start'
    }
});


