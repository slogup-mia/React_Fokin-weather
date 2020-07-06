import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
// `expo install expo-location`

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();

      // 아래 ES6 문법을 사용한 여러 데이터 접근 방법을 숙지하자
      // 1.
        // const location = await Location.getCurrentPositionAsync();
        // console.log(location)
      // 2.
        // const { coords } = await Location.getCurrentPositionAsync();
        // console.log(coords.latitude, coords.longitude)
      // 3.
      const { coords : {latitude, longitude} } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude)

      this.setState({isLoading: false})
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

