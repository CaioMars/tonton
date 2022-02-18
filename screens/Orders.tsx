import { Image, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function Orders() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/sorry.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Orders</Text>
      <Text style={styles.textDesc}>
        Feature beyond the scope of this project.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textDesc: {
    maxWidth: 250,
    textAlign: "center",
  },
  image: {
    height: 250,
    marginBottom: 20,
  },
});
