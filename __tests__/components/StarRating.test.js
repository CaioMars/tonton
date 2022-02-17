import * as React from "react";
import renderer from "react-test-renderer";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons";

import StarRating from "../../components/StarRating";

describe("<StarRating />", () => {
  it(`renders correctly`, async () => {
    await Font.loadAsync({
      ...FontAwesome.font,
    });
    const tree = await renderer
      .create(<StarRating rating={3.5} count={100} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
