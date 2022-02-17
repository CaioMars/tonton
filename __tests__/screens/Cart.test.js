jest.useFakeTimers();
import ReducerCart, { add } from "../../store/ReducerCart";
import Cart from "../../screens/Cart";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { configureStore } from "@reduxjs/toolkit";

describe("<Cart />", () => {
  let cart, store, tree;

  it("cart with NO items renders correctly", async () => {
    store = configureStore({
      reducer: {
        cart: ReducerCart,
      },
    });

    tree = await renderer
      .create(
        <Provider store={store}>
          <Cart cart={store.getState().cart} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  const testItem1 = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  };

  it("cart with items renders correctly", async () => {
    cart = ReducerCart(
      { items: [], subtotal: 0, delivery: 0, discount: 0, total: 0 },
      add(testItem1)
    );
    const preloadedState = { cart };
    store = configureStore({
      reducer: {
        cart: ReducerCart,
      },
      preloadedState,
    });

    tree = await renderer
      .create(
        <Provider store={store}>
          <Cart cart={cart} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
