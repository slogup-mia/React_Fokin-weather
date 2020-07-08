import React from 'react';
import {Alert} from "react-native";
import * as Location from "expo-location";
import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

import Loading from "./Loading";
import Weather from "./Weather";


export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    // 아래 JSON object DOM에서 object를 추출하는 ES6 문법을 확인해보자
    const {data : { main: {temp}, weather }  } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
    console.log(data)
    this.setState({isLoading:false, temp:temp, condition: weather[0].main})
  }


  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you", 'So Sad');
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    // return <Loading />;
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.floor(temp)} condition={condition}/>;
  }
}

