import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

export default function QuantityInput({
  quantity,
  onPress,
}: {
  quantity: number;
  onPress: Function;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress("decrease")}>
        <View
          style={[
            styles.containerAction,
            { borderTopLeftRadius: 5, borderBottomLeftRadius: 5 },
          ]}
        >
          <Text style={styles.textAction}>-</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.containerQuantity}>
        <Text style={styles.textQuantity}>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={() => onPress("increase")}>
        <View
          style={[
            styles.containerAction,
            { borderTopRightRadius: 5, borderBottomRightRadius: 5 },
          ]}
        >
          <Text style={styles.textAction}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#999",
    alignSelf: "baseline",
  },
  containerAction: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  containerQuantity: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textAction: {
    fontSize: 18,
  },
  textQuantity: {
    fontSize: 14,
  },
});
