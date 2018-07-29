import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import TweetBar from "./TweetBar";
const Row = props => (
  <View style={styles.row}>
    <View style={{ flex: 1 }}>
      <Image
        style={styles.profilePicStyle}
        source={{ uri: props.profile_pic }}
      />
    </View>
    <View style={{ flex: 4 }}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.nicknameStyle}>{props.nick_name}</Text>
        <Text style={styles.usernameStyle}>{"@" + props.creator}</Text>
      </View>
      <TouchableOpacity
        style={styles.content}
        onPress={() =>
          props.navigation.navigate("TweetDetail", {
            creator: props.creator,
            nick_name: props.nick_name,
            profile_pic: props.profile_pic,
            body: props.body,
            media: props.media
          })
        }
      >
        <Text style={styles.textStyle}>{props.body}</Text>
        <Image style={styles.mediaStyle} source={{ uri: props.media }} />
      </TouchableOpacity>
      <TweetBar />
    </View>
  </View>
);
const styles = StyleSheet.create({
  row: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#7c8390",
    flexDirection: "row"
  },
  content: {
    flex: 4,
    paddingTop: 2,
    paddingBottom: 8,
    paddingRight: 16
  },
  mediaStyle: {
    flex: 1,
    flexDirection: "row",
    height: 160,
    borderRadius: 16
  },
  textStyle: {
    paddingBottom: 6,
    fontSize: 15
  },
  profilePicStyle: {
    width: 60,
    height: 70,
    borderRadius: 20
  },
  nicknameStyle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingLeft: 6
  },
  usernameStyle: {
    color: "#7c8390",
    fontSize: 16,
    paddingLeft: 6
  }
});

export default withNavigation(Row);
