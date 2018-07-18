import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createSwitchNavigator } from "react-navigation";
import store from "./redux/store";
import LoginScreen from "./screens/LoginScreen";
import TweetFeedScreen from "./screens/TweetFeedScreen";

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  TweetFeed: TweetFeedScreen
});
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
