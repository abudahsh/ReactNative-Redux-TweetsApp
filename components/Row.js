import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import React from "react";

const Row = props => (
  <TouchableOpacity style={styles.row}>
    <Text>{props.body}</Text>
    <Image style={{ width: 50, height: 50 }} source={{ uri: props.media }} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  row: { padding: 20 }
});

export default Row;
