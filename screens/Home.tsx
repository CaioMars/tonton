import { useState, useEffect, memo } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";
import Item from "../components/Item";
import AppConfig from "../AppConfig.json";
import { View, Text, ActivityIndicator } from "../components/Themed";
import Toast from "react-native-toast-message";

import { RootTabScreenProps } from "../types";

let _isMounted = false;

function Home({ navigation }: RootTabScreenProps<"Shop">) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    _isMounted = true;
    loadData();

    return () => {
      _isMounted = false;
    };
  }, []);

  function loadData(cb?: any) {
    try {
      axios.get(`${AppConfig.api}/products`).then((res) => {
        if (!_isMounted) return;

        if (res.status === 200) {
          const { data } = res;
          setItems(data);
        } else {
          setError(`Error ${res.status}: failed to load products`);
        }

        setLoading(false);
        setRefreshing(false);

        if (typeof cb === "function") cb();
      });
    } catch (error) {
      setLoading(false);
      setRefreshing(false);
      setError("Failed to load products");
      // console.log(error);
    }
  }

  if (loading && !error) {
    return (
      <View style={styles.containerCenter}>
        <ActivityIndicator size={"large"} color="primary" />
      </View>
    );
  } else if (!loading && error) {
    return (
      <View style={styles.containerCenter}>
        <Text>{error}</Text>
        <Button
          title="Try again"
          onPress={() => {
            setLoading(true);
            setError("");
            loadData();
          }}
        />
      </View>
    );
  } else {
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
          keyExtractor={(item: object, index: any) => index}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            loadData(() => {
              Toast.show({
                type: "success",
                text1: "Product list refreshed",
                position: "bottom",
              });
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  textError: {
    fontSize: 18,
    marginBottom: 10,
    maxWidth: 250,
  },
});

export default Home;
