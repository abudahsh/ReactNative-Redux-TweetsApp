import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
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
      <View style={{ flex: 1 }}>
        <View>
          <Image
            style={{ width: 80, height: 90 }}
            source={{ uri: profile_pic }}
          />
        </View>
        <View style={{ flex: 4 }}>
          <View style={{ flexDirection: "row" }}>
            <Text>{nick_name}</Text>
            <Text>{"@" + creator}</Text>
          </View>
          <TouchableOpacity>
            <Text>{body}</Text>
            <Image
              style={{ width: 300, height: 300 }}
              source={{ uri: media }}
            />
          </TouchableOpacity>
          <TweetBar />
        </View>
      </View>
    );
  }
}

export default TweetDetailScreen;
