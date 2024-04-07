/*
import { fireEvent, render, screen } from "@testing-library/react";

import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mocking the global fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search Res List for cafe text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "cafe" } });
  fireEvent.click(searchBtn);

  const cards = await screen.findAllByTestId("resCard");
  expect(cards.length).toBe(2);

  console.log("printing cards after search cafe");
  console.log(cards);
  expect(searchBtn).toBeInTheDocument();
});

it("Should filter top rated restuarants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardBeforeFilter.length).toBe(9);

  const topRateBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRateBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(8);
});
*/
