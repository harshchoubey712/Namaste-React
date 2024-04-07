/*

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../Header.js";
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom";

test("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" });

  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();
});

test("Should render Header Component with a Cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const loginButton = screen.getByRole("button");
  //const loginButton = screen.getByRole("button", { name: "Login" });

  //const loginButton = screen.getByText("Cart - (0 items)");
  const loginButton = screen.getByText(/Cart/);
  expect(loginButton).toBeInTheDocument();
});

test("Should change Login Button to Logout on Click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
*/
