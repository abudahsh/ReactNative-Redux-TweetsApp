import React from "react";
import { Image, View, StyleSheet } from "react-native";

const TweetBar = () => {
  return (
    <View style={styles.tweetBar}>
      <Image
        style={{ width: 20, height: 20 }}
        source={require("./../assets/comment.png")}
      />
      <Image
        style={{ width: 20, height: 20 }}
        source={require("./../assets/retweet.png")}
      />
      <Image
        style={{ width: 20, height: 20 }}
        source={require("./../assets/like.png")}
      />
      <Image
        style={{ width: 20, height: 20 }}
        source={require("./../assets/share.png")}
      />
    </View>
  );
};
export default TweetBar;
const styles = StyleSheet.create({
  tweetBar: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
