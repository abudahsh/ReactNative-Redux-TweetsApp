import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import TweetBar from "./../components/TweetBar";
class TweetDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Tweet",
      headerStyle: {
        backgroundColor: "white"
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };
  render() {
    const { navigation } = this.props;
    const creator = navigation.getParam("creator", "username");
    const nick_name = navigation.getParam("nick_name", "nickname");
    const profile_pic = navigation.getParam("profile_pic", "Blank ProfilePic");
    const body = navigation.getParam("body", "Tweet body....");
    const media = navigation.getParam("media", "Blank Image");

    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1
        }}
      >
        <View style={styles.userInfoBar}>
          <View>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 12
              }}
              source={{ uri: profile_pic }}
            />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 10 }}>
            <Text
              style={{ fontWeight: "bold", paddingBottom: 3, fontSize: 16 }}
            >
              {nick_name}
            </Text>
            <Text style={{ color: "#7c8390", fontSize: 16 }}>
              {"@" + creator}
            </Text>
          </View>
        </View>
        <Text style={styles.contentStyle}>{body}</Text>
        <View>
          <TouchableOpacity
            style={{
              margin: 12
            }}
          >
            <Image
              overflow="visible"
              style={styles.mediaStyle}
              source={{ uri: media }}
            />
          </TouchableOpacity>
          <TweetBar />
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <TextInput
            style={{ alignContent: "center", height: 50, paddingBottom: 6 }}
            placeholder="Tweet your replay ...."
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default TweetDetailScreen;

const styles = StyleSheet.create({
  userInfoBar: {
    flexDirection: "row",
    padding: 6
  },
  contentStyle: {
    fontSize: 16
  },
  mediaStyle: {
    minHeight: 320,
    minWidth: 300,
    maxHeight: 380,
    maxWidth: 350,
    borderRadius: 9
  }
});
