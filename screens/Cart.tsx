import {
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Text, View } from "../components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, connect } from "react-redux";
import { remove } from "../store/ReducerCart";
import { twoDecimals } from "../functions/helper";

function Cart({ navigation, cart }: any) {
  const items = cart.items;
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
        <Text style={{ marginBottom: 20 }}>Your cart is empty.</Text>
        <Button
          title="Go shopping"
          onPress={() => navigation.replace("Root")}
        />
      </View>
    );
  } else {
    return (
      <FlatList
        data={items}
        keyExtractor={({ item, index }) => index}
        renderItem={({ item, index }: any) => (
          <View key={index} style={styles.containerItem}>
            <View style={styles.containerImage}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.containerTitle}>
              <Text>{item.title}</Text>
            </View>
            <View style={styles.containerPrice}>
              <Text>$ {twoDecimals(item.price)}</Text>
            </View>
            <View style={styles.containerDelete}>
              <TouchableOpacity onPress={() => dispatch(remove(index))}>
                <FontAwesome name="trash" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <>
              <View style={styles.containerTotal}>
                <View style={styles.containerTotalRow}>
                  <View style={styles.containerTotalLabel}>
                    <Text style={styles.textLabel}>Subtotal</Text>
                  </View>
                  <View style={styles.containerTotalValue}>
                    <Text style={styles.textValue}>
                      $ {twoDecimals(cart.subtotal)}
                    </Text>
                  </View>
                </View>
                <View style={styles.containerTotalRow}>
                  <View style={styles.containerTotalLabel}>
                    <Text style={styles.textLabel}>Delivery</Text>
                  </View>
                  <View style={styles.containerTotalValue}>
                    <Text style={styles.textValue}>
                      $ {twoDecimals(cart.delivery)}
                    </Text>
                  </View>
                </View>
                <View style={styles.containerTotalRow}>
                  <View style={styles.containerTotalLabel}>
                    <Text style={styles.textLabel}>Discount</Text>
                  </View>
                  <View style={styles.containerTotalValue}>
                    <Text style={styles.textValue}>
                      $ {twoDecimals(cart.discount)}
                    </Text>
                  </View>
                </View>
                <View style={styles.containerTotalRow}>
                  <View style={styles.containerTotalLabel}>
                    <Text style={styles.textTotal}>Total</Text>
                  </View>
                  <View style={styles.containerTotalValue}>
                    <Text style={styles.textTotal}>
                      ${twoDecimals(cart.total)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.containerShopping}>
                <Button
                  title="Continue shopping"
                  onPress={() => navigation.replace("Root")}
                />
              </View>
            </>
          );
        }}
      />
    );
  }
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
  },
  containerItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 5,
  },
  containerImage: {},
  containerTitle: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerPrice: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  containerDelete: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: 75,
    height: 75,
  },
  containerTotal: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  containerTotalRow: {
    flexDirection: "row",
    padding: 5,
  },
  containerTotalLabel: {
    flex: 1,
  },
  containerTotalValue: {
    flex: 1,
    alignItems: "flex-end",
  },
  containerShopping: {
    padding: 10,
  },
  textLabel: {},
  textValue: {},
  textTotal: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

function mapStateToProps(state: any) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Cart);
