import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import React from "react";

const Row = props => (
  <TouchableOpacity style={styles.row}>
    <Text style={styles.textStyle}>{props.body}</Text>
    <Image style={styles.imageStyle} source={{ uri: props.media }} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  row: {
    padding: 10
  },
  imageStyle: {
    flex: 1,
    flexDirection: "row",
    height: 200
  },
  textStyle: {
    paddingBottom: 8
  }
});

export default Row;
