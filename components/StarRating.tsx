import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

export default function StarRating({
  rating,
  count,
  size,
}: {
  rating: number;
  count: number;
  size?: number;
}) {
  const whole = Math.floor(rating);
  const isHalf = rating - whole > 0.5 ? true : false;

  const color = "#FFE000";
  const defaultSize = 20;

  function buildStars() {
    const stars = [];
    for (let i = 0; i < whole; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name="star"
          color={color}
          size={size || defaultSize}
        />
      );
    }

    if (isHalf)
      stars.push(
        <FontAwesome
          key={stars.length}
          name="star-half"
          color={color}
          style={{ marginRight: 4 }}
          size={size || defaultSize}
        />
      );

    if (stars.length < 5) {
      let j = 1;
      for (let i = 5 - stars.length; i > 0; i--) {
        stars.push(
          <FontAwesome
            key={stars.length + j}
            name="star-o"
            color={color}
            size={size || defaultSize}
          />
        );
        j++;
      }
    }

    return stars;
  }

  return (
    <View style={styles.container}>
      {buildStars()}
      <Text style={styles.textRating}>{rating}</Text>
      <Text style={styles.textCount}>({count})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textRating: {
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  textCount: {},
});
