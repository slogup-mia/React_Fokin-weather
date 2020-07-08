import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
// `expo install expo-location`
import axios from 'axios';
// import config from 'react-native-config';
import * as keys from './keys';
const API_KEY = keys.API_KEY;

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
    console.log(data)
    // console.log(config.TEST)
  }


  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();

      const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync();
      // console.log(latitude, longitude)

      this.setState({isLoading: false})
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Can't find you", 'So Sad');
    }
  };
  // Error : LOCATION permission is required to do this operation.
    // 모바일유저의 현재위치 데이터 제공 허가가 있어야 한다.

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <Loading />;
    const {isLoading} = this.state;
    return isLoading ? <Loading/> : null;
  }
}

