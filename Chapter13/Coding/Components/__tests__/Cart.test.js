import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../../utils/appStore";
import { Provider } from "react-redux";
import ItemList from "../itemList";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = await screen.findByText("Breakfast (10)");
  fireEvent.click(accordionHeader);

  const foodItems = await screen.findAllByTestId("foodItems");

  expect(foodItems.length).toBe(10);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  expect(await screen.findByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(await screen.findByText("Cart - (2 items)")).toBeInTheDocument();

  expect(foodItems.length).toBe(10);

  const clearBtn = await screen.findByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearBtn);

  expect(foodItems.length).toBe(10);

  expect(await screen.findByText("Cart - (0 items)")).toBeInTheDocument();

  // console.log(addBtns.length);
});
