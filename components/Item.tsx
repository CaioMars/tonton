import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { twoDecimals } from "../functions/helper";

export default function Item({ item, onPress }: any) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.textPrice}>$ {twoDecimals(item.price)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    paddingVertical: 10,
  },
  textPrice: {
    fontWeight: "bold",
  },
});
