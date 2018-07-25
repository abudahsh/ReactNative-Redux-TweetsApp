import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createSwitchNavigator } from "react-navigation";
import store from "./redux/store";
import LoginScreen from "./screens/LoginScreen";
import TweetFeedScreen from "./screens/TweetFeedScreen";
import WelcomeScreen from './screens/WelcomeScreen'
import RegisterScreen from './screens/RegisterScreen'

const AppNavigator = createSwitchNavigator({
  Welcome:WelcomeScreen,
  Login: LoginScreen,
  TweetFeed: TweetFeedScreen,
Register: RegisterScreen,
},{
initialRouteName:'Welcome'});
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

