import { combineReducers } from "redux";

import reviewReducer from "./reviewReducer";

const selectedReviewReducer = (selectedReview = null, action) => {
  if (action.type === "REVIEW_SELECTED") {
    return action.payload;
  }
  return selectedReview;
};

export default combineReducers({
  selectedReview: selectedReviewReducer,
  reviews: reviewReducer,
});
