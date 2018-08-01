import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import * as firebase from "firebase";
import store from "./redux/store";
import LoginScreen from "./screens/LoginScreen";
import TweetFeedScreen from "./screens/TweetFeedScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TweetDetailScreen from "./screens/TweetDetailScreen";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const TweetsNavigator = createStackNavigator({
  TweetFeed: TweetFeedScreen,
  TweetDetail: TweetDetailScreen
});

const AppNavigator = createSwitchNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    TweetMain: TweetsNavigator
  },
  {
    initialRouteName: "Welcome"
  }
);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
