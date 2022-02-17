jest.useFakeTimers();
import ReducerCart, { add, remove } from "../../store/ReducerCart";

describe("[Cart Reducer]", () => {
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

  const testItem2 = {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  };

  it("adding 1 item to cart", () => {
    expect(
      ReducerCart(
        { items: [], subtotal: 0, delivery: 0, discount: 0, total: 0 },
        add(testItem1)
      )
    ).toEqual({
      items: [testItem1],
      subtotal: 109.95,
      discount: 0,
      delivery: 0,
      total: 109.95,
    });
  });

  it("adding 2 items cart", () => {
    expect(
      ReducerCart(
        {
          items: [testItem1],
          subtotal: 109.95,
          discount: 0,
          delivery: 0,
          total: 109.95,
        },
        add(testItem2)
      )
    ).toEqual({
      items: [testItem1, testItem2],
      subtotal: 132.25,
      discount: 0,
      delivery: 0,
      total: 132.25,
    });
  });

  it("removing 1 item from cart (empty cart)", () => {
    expect(
      ReducerCart(
        {
          items: [testItem1],
          subtotal: 109.95,
          discount: 0,
          delivery: 0,
          total: 109.95,
        },
        remove(0)
      )
    ).toEqual({
      items: [],
      subtotal: 0,
      discount: 0,
      delivery: 0,
      total: 0,
    });
  });

  it("removing 1 item from 2 item cart", () => {
    expect(
      ReducerCart(
        {
          items: [testItem1, testItem2],
          subtotal: 132.25,
          discount: 0,
          delivery: 0,
          total: 132.25,
        },
        remove(1)
      )
    ).toEqual({
      items: [testItem1],
      subtotal: 109.95,
      discount: 0,
      delivery: 0,
      total: 109.95,
    });
  });

  it("removing non-existant item from cart", () => {
    expect(
      ReducerCart(
        {
          items: [testItem1],
          subtotal: 109.95,
          discount: 0,
          delivery: 0,
          total: 109.95,
        },
        remove(1)
      )
    ).toEqual({
      items: [testItem1],
      subtotal: 109.95,
      discount: 0,
      delivery: 0,
      total: 109.95,
    });
  });
});
