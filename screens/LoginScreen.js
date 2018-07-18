import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "./../redux/actions";
import { PropTypes } from "prop-types";
import {
  View,
  Button,
  Text,
  AsyncStorage,
  TextInput,
  StyleSheet
} from "react-native";
class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
    token: "",
    message: ""
  };

  handleSubmit = () => {
    this.props.login(this.state.username, this.state.password);
    if (this.props.isAuthenticated) {
      this.props.navigation.navigate("TweetFeed");
    }
  };
  render() {
    return (
      <View style={styles.loginStyle}>
        <Text>{this.props.message}</Text>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <Button title="Login" onPress={this.handleSubmit} />
        <Text>If you don't have account please Register</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  username: state.userLogin.username,
  // token: state.userLogin.token,
  message: state.userLogin.message,
  isAuthenticated: state.userLogin.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(loginUser(username, password))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({
  loginStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
