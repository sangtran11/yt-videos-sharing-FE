import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";
import Signin from "../../auth/Signin";
import ShareVideos from "../../YoutubeVideos/ShareVideos";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import reducers from "../../../reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const MockNavbar = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Signin />
        <ShareVideos />
      </BrowserRouter>
    </Provider>
  );
};

test("Should navigate to a sign-in page when click on the Signin button", () => {
  render(<MockNavbar />);
  const btnSigninEl = screen.getByTestId("btn-signin");
  fireEvent.click(btnSigninEl);
  expect(screen.getByTestId("email-input")).toBeInTheDocument();
});