import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import store from "./../redux/store";
class ProfileScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Profile",
    drawerIcon: ({ tintColor }) => (
      <Image source={{ uri: store.getState().userLogin.profilePic }} />
    )
  };
  state = {
    username: store.getState().userLogin.username,
    nickName: store.getState().userLogin.nickName,
    bio: ""
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile</Text>
        <TextInput value={this.state.nickName} />
        <TextInput value={this.state.username} />
        <TextInput value={this.state.bio} />
      </View>
    );
  }
}

export default ProfileScreen;
