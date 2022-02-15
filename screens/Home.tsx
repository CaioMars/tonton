import { useState, useEffect, memo } from "react";
import { FlatList, StyleSheet } from "react-native";
import axios from "axios";
import Item from "../components/Item";
import AppConfig from "../AppConfig.json";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

function Home({ navigation }: RootTabScreenProps<"Shop">) {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(`${AppConfig.api}/products`).then((res) => {
      if (res.status === 200) {
        const { data } = res;
        setItems(data);
      }
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={items}
        numColumns={2}
        renderItem={({ item }: any) => {
          return (
            <Item
              item={item}
              onPress={() => navigation.push("Product", item)}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default memo(Home);
