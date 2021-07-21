import { combineReducers } from "redux";

import reviewReducer from "./reviewReducer";
import lugarReducer from "./lugarReducer";

const selectedReviewReducer = (selectedReview = null, action) => {
  if (action.type === "REVIEW_SELECTED") {
    return action.payload;
  }
  return selectedReview;
};

const selectedLugarReducer = (selectedLugar = null, action) => {
  if (action.type === "LUGAR_SELECTED") {
    return action.payload;
  }
  return selectedLugar;
};

export default combineReducers({
  selectedReview: selectedReviewReducer,
  reviews: reviewReducer,
  selectedLugar: selectedLugarReducer,
  lugares: lugarReducer,
});
