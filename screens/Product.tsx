import { Text, View } from "../components/Themed";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { add } from "../store/ReducerCart";
import StarRating from "../components/StarRating";
import { ItemType } from "../types";

export default function Product({ navigation, route }: any) {
  const item: ItemType = route.params.item;
  const dispatch = useDispatch();

  const MAX_TITLE_LENGTH = 25;
  navigation.setOptions({
    title:
      item.title.length > MAX_TITLE_LENGTH
        ? `${item.title.substr(0, MAX_TITLE_LENGTH).trim()}...`
        : item.title,
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.containerScrollView}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.containerContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <StarRating
              rating={item.rating?.rate || 0}
              count={item.rating?.count || 0}
            />
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.containerBottom}>
        <Button
          title="Buy"
          onPress={() => {
            dispatch(add(item));
            navigation.replace("Cart");
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScrollView: {},
  containerContent: {
    padding: 10,
  },
  containerBottom: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    marginBottom: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
