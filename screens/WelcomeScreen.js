import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.iconStyle}
          source={require("./../assets/twitter-white.jpg")}
        />
        <Text style={{ paddingBottom: 9 }}>Welcome Gawaan</Text>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            marginBottom: 16
          }}
        >
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20
          }}
        >
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.welcomeText}>
          <Text style={{ color: "white", fontSize: 18 }}>
            Welcome To Twitter{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            Find out what's happening, right now with the people and
            organizations you care about
          </Text>
        </View>
      </View>
    );
  }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1da1f3"
  },
  welcomeText: {
    flex: 3,
    justifyContent: "center",
    marginLeft: 18
  },
  loginText: {
    color: "#1da1f3",
    fontSize: 24,
    textAlign: "center"
  },
  buttonStyle: {
    padding: 8,
    width: 240
  },
  iconStyle: {
    flex: 4,
    justifyContent: "center",
    width: 190,
    height: 80,
    alignItems: "center"
  }
});
