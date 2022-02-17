jest.useFakeTimers();
import * as React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../../store";
import Product from "../../screens/Product";

it(`renders correctly`, async () => {
  const tree = await renderer
    .create(
      <Provider store={store}>
        <Product
          route={{
            params: {
              item: {
                id: 1,
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description:
                  "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image:
                  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                rating: { rate: 3.9, count: 120 },
              },
            },
          }}
        />
      </Provider>
    )
    .toJSON();

  await expect(tree).toMatchSnapshot();
});
