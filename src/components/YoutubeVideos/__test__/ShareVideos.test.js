import { render, screen, fireEvent } from "@testing-library/react";
import ShareVideos from "../ShareVideos";
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

const MockShareVideos = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ShareVideos />
      </BrowserRouter>
    </Provider>
  );
};

test("Should have an input for url video", () => {
  render(<MockShareVideos />);
  const inputUrlEl = screen.getByTestId("yt-url");
  expect(inputUrlEl).toBeInTheDocument();
  expect(inputUrlEl).toHaveAttribute("type", "text");
});