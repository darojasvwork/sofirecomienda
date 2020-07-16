import reviews from "../apis/reviews";
export const selectReview = (review) => {
  return {
    type: "REVIEW_SELECTED",
    payload: review,
  };
};

export const fetchReviews = () => async (dispatch) => {
  const response = await reviews.get("/reviews");
  dispatch({ type: "FETCH_REVIEWS", payload: response.data });
};

export const fetchReview = (id) => async (dispatch) => {
  const response = await reviews.get(`/reviews/${id}`);
  dispatch({ type: "FETCH_REVIEW", payload: response.data });
};
