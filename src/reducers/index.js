import { combineReducers } from "redux";

import auth from "./auth";
import videos from "./video";

export default combineReducers({
  auth,
  videos,
});
