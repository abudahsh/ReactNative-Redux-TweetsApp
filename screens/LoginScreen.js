import React, { Component } from "react";
import { connect } from "react-redux";
import loginUser from "./../redux/actions";
import { PropTypes } from "prop-types";
import {
  View,
  Button,
  AsyncStorage,
  TextInput,
  StyleSheet
} from "react-native";
class LoginScreen extends Component {
  state = {
    username: "",
    password: "",
    token: AsyncStorage.getItem("token"),
    message: ""
  };

  handleSubmit = () => {
    this.props.login(this.state.username, this.state.password);
    this.props.navigation.navigate("TweetFeed");
    console.log(this.state);
  };
  render() {
    return (
      <View style={styles.loginStyle}>
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
  username: state.userReducer.username,
  // token: state.userReducer.token,
  message: state.userReducer.message
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
