import React from "react";
import { View, Image } from "react-native";
const TwitterIcon = () => {
  return (
    <View>
      <Image
        style={{ width: 70, height: 70 }}
        source={require("./../assets/twitter-white.jpg")}
      />
    </View>
  );
};

export default TwitterIcon;
