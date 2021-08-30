import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "./components/App";

const mockStore = configureStore();
const state = {
  currentUser: {
    username: null,
    position: null,
  },
  currentConversation: {
    username: null,
    id: null,
  },
  messages: {},
  conversations: [],
};

describe("<App/>", () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation(() => {});
    jest.spyOn(global, "fetch").mockImplementation(() => new Promise(() => {}));
  });

  it("should render <Login/> component when currentUser is not present", () => {
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByTestId("login-component")).toBeTruthy();
  });

  it("should render <Home/> component when currentUser is present", () => {
    state.currentUser.username = "mockuser";
    state.currentUser.position = "mockposition";
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByTestId("home-component")).toBeTruthy();
  });
});
