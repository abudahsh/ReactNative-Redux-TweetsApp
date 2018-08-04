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
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import store from "./../redux/store";
import TwitterIcon from "./../components/TwitterIcon";
class LoginScreen extends Component {
  state = {
    username: "dahsh",
    password: "killmemore",
    token: "",
    message: "",
    isAuthenticated: false
  };

  handleSubmit = () => {
    this.props.login(this.state.username, this.state.password);
  };
  componentWillUpdate() {
    if (store.getState().userLogin.isAuthenticated) {
      this.props.navigation.navigate("TweetFeed", {
        creator: this.state.username
      });
    }
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.loginStyle}>
        <TwitterIcon />
        <Text>{this.props.message}</Text>
        <TextInput
          placeholder="Username"
          style={styles.inputStyle}
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            marginBottom: 16,
            marginTop: 40
          }}
        >
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.handleSubmit}
          >
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text>I Don't Have an account I wanna</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              textDecorationLine: "underline"
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    justifyContent: "center",
    backgroundColor: "#1da1f3"
  },
  inputStyle: {
    backgroundColor: "white",
    justifyContent: "center",
    color: "#1da1f3",
    fontSize: 16,
    width: 300,
    height: 40,
    marginBottom: 9,
    borderRadius: 9
  },
  loginText: {
    color: "#1da1f3",
    fontSize: 24,
    textAlign: "center"
  },
  buttonStyle: {
    padding: 8,
    width: 240
  }
});
