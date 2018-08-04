import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "./../redux/actions";
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
import TwitterIcon from "./../components/TwitterIcon";
import store from "./../redux/store";
class RegisterScreen extends Component {
  state = {
    username: "",
    password1: "",
    password2: "",
    token: "",
    message: ""
  };

  handleSubmit = () => {
    this.props.register(this.state.username, this.state.password1);
  };
  componentWillUpdate() {
    if (store.getState().userLogin.isAuthenticated) {
      this.props.navigation.navigate("TweetFeed");
    }
  }
  render() {
    let { password1, password2 } = this.state;
    let mess = "";
    if (
      password1.length > 1 &&
      password2.length > 1 &&
      password1 !== password2
    ) {
      mess = "Passwords don't match";
    }
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.loginStyle}>
        <TwitterIcon />
        <Text>{this.props.message}</Text>
        <Text>{mess}</Text>
        <TextInput
          placeholder="Username"
          style={styles.inputStyle}
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          placeholder="E-mail"
          style={styles.inputStyle}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
          value={this.state.password}
          onChangeText={password1 => this.setState({ password1 })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={styles.inputStyle}
          value={this.state.password}
          onChangeText={password2 => this.setState({ password2 })}
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
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text>I Have account I wanna</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 16,
              textDecorationLine: "underline"
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  username: state.userLogin.username,
  //   // token: state.userLogin.token,
  message: state.userLogin.message
  //   isAuthenticated: state.userLogin.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  register: (username, password) => dispatch(registerUser(username, password))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen);
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
