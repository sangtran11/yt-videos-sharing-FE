import { render, screen } from "@testing-library/react";
import Signin from "../Signin";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import reducers from "../../../reducers";
import userEvent from "@testing-library/user-event";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const MockSignin = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    </Provider>
  );
};

test("Should have an email input", () => {
  render(<MockSignin />);
  const emailElement = screen.getByTestId("email-input");
  expect(emailElement).toBeInTheDocument();
  expect(emailElement).toHaveAttribute("type", "email");
});

test("pass valid email to test email input", () => {
  render(<MockSignin />);
  const emailElement = screen.getByTestId("email-input");
  userEvent.type(emailElement, "test@mail.com");

  expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
});

test("Should have an password input", () => {
  render(<MockSignin />);
  const pwEl = screen.getByTestId("password-input");
  expect(pwEl).toBeInTheDocument();
  expect(pwEl).toHaveAttribute("type", "password");
});
