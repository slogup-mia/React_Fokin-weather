import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
// `expo install expo-location`
import axios from 'axios';
import { API_KEY } from 'react-native-dotenv'
import Weather from "./weather";


export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(

        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
    console.log(data)
    this.setState({isLoading:false, temp:data.main.temp, condition:data.weather[0].main})
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
    // return <Loading />;
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.floor(temp)} condition={condition}/>;
  }
}

