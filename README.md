# Fokin Weather 
Learning React Native by Building a Foking Weather App

## 0. INTRODUCTION 
-[x] \#0.0 Introduction <br/>
-[x] \#0.1 Requirement <br/>
-[x] \#0.2 Expo vs RN CLI <br/>
-[x] \#0.3 [Creating the Project](https://github.com/JungSWon/JavaScript/tree/master/05_01_React-by-Nomad#%EC%A0%84%EC%B2%98%EB%A6%AC-b) <br/>
-[x] \#0.4 [Getting to know Expo](https://github.com/JungSWon/JavaScript/tree/master/05_01_React-by-Nomad#%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95-b) <br/>
-[x] \#0.5 [How does React Native Work?](https://github.com/JungSWon/JavaScript/tree/master/05_01_React-by-Nomad#what-is-react-native-) <br/>

## 1. LOGIC
-[x] \#1.0 Layouts with Flexbox in React Native <br/>
-[x] \#1.1 Loading Screen <br/>
-[x] \#1.2 Getting the Location <br/>
    - ReactNative Doc : https://reactnative.dev/docs/geolocation
    - Expo Doc : https://docs.expo.io/versions/v38.0.0/sdk/location/
    - Expo의 SDK가 더 파워풀하고 편리하기 때문에 대부분의 개발자들은 expo를 선호한다.
    - 예로, Location 관련 
        - RN의 Geolocation API를 통해서 : 모바일 현위치, 위치변화, clearWatch 등 기본만 지원
        - Expo의 Location SDK에서 : 위의 기본 + 서비스가능여부, GPS네트워크 여부, 주소를 위경도로 변환, 특정 지역에 사용자가 접근하거나 떠난 시점을 캐치하는 등의 데이터를 얻을 수 있다. 
    - Expo API는 디폴트로 인스톨되어있지 않으므로, 필요한 라이브러리를 인스톨해야한다.
    - `expo install expo-location`  
-[x] \#1.3 Asking for Permissions <br/>
-[x] \#1.4 Getting the Weather <br/>

## 2. STYLE
-[x] \#2.0 Displaying Temperature <br/>
-[x] \#2.1 Getting the Condition Names <br/>
-[ ] \#2.2 Icons and Styling <br/>
-[ ] \#2.3 Background Gradient <br/>
-[ ] \#2.4 Titles and Subtitles <br/>
-[ ] \#2.5 Conclusions <br/>