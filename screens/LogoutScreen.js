import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { logoutUser } from "./../redux/actions";
import store from "./../redux/store";

class LogoutScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Logout",
    drawerIcon: ({ tintColor }) => (
      <Image source={{ uri: store.getState().userLogin.profilePic }} />
    )
  };
  handleSubmit = () => {
    this.props.logout();
  };
  componentWillUpdate() {
    if (!store.getState().userLogin.isAuthenticated) {
      this.props.navigation.navigate("Welcome");
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Logout</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={this.props.logout}
        >
          <Text style={styles.handleSubmit}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  username: state.userLogin.username,
  token: state.userLogin.token,
  message: state.userLogin.message,
  isAuthenticated: state.userLogin.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logout: token => dispatch(logoutUser(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutScreen);

const styles = StyleSheet.create({
  loginText: {
    color: "#1da1f3",
    fontSize: 24,
    textAlign: "center"
  },
  buttonStyle: {
    padding: 8,
    width: 240,
    backgroundColor: "#1da1f3"
  }
});
