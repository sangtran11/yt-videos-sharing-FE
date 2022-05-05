import { render, screen } from "@testing-library/react";
import Signup from "../Signup";
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

const MockSignup = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    </Provider>
  );
};

test("Should have a first name input", () => {
  render(<MockSignup />);
  const firstnameEl = screen.getByTestId("input-firstName");
  expect(firstnameEl).toBeInTheDocument();
  expect(firstnameEl).toHaveAttribute("type", "text");
});

test("Should have a last name input", () => {
  render(<MockSignup />);
  const lastnameEl = screen.getByTestId("input-lastName");
  expect(lastnameEl).toBeInTheDocument();
  expect(lastnameEl).toHaveAttribute("type", "text");
});

test("Should have an email input", () => {
  render(<MockSignup />);
  const emailElement = screen.getByTestId("email-input");
  expect(emailElement).toBeInTheDocument();
  expect(emailElement).toHaveAttribute("type", "email");
});

test("pass valid email to test email input", () => {
  render(<MockSignup />);
  const emailElement = screen.getByTestId("email-input");
  userEvent.type(emailElement, "test@mail.com");

  expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
});

test("Should have an password input", () => {
  render(<MockSignup />);
  const pwEl = screen.getByTestId("password-input");
  expect(pwEl).toBeInTheDocument();
  expect(pwEl).toHaveAttribute("type", "password");
});
