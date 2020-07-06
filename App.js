import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blueView}/>
      <View style={styles.yellowView}/>
    </View>
  );
}

// React Native에서 StyleSheet 작성 문법은 CSS와 비슷하지만 다른 부분이 많다.
  // debug message가 친절한 편이니 참고하고, 공부해서 올바르게 사용하자

// React Native에서 기본 flexDirection : clumn 이다.
  // cf) 웹에서는 row이다.
  // 모바일에서는 보통 새 요소가 기존 요소 아래로 배치가 되니까
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  // 형제지간인 blueView와 yellowView의 flex
    // 두 View가 속한 부모 View 안에서
    // blueView는 1만큼, yelloView는 4만큼 차지하도록 한다.
  blueView:{
    flex: 1,
    backgroundColor: "blue"
  },
  yellowView:{
    flex: 4,
    backgroundColor: "yellow"
  }
});
