import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
// `expo install expo-location`

export default class extends React.Component {
  getLocation = async () =>{
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };
  // Error : LOCATION permission is required to do this operation.
    // 모바일유저의 현재위치 데이터 제공 허가가 있어야 한다.

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <Loading />;
  }
}

