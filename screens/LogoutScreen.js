import React from "react";
import { View, Text, Image } from "react-native";
import store from "./../redux/store";

class LogoutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Logout",
    drawerIcon: ({ tintColor }) => (
      <Image source={{ uri: store.getState().userLogin.profilePic }} />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Logout</Text>
      </View>
    );
  }
}

export default LogoutScreen;
