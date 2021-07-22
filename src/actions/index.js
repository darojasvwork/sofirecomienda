import datos from "../apis/datos";
export const selectReview = (review) => {
  return {
    type: "REVIEW_SELECTED",
    payload: review,
  };
};

export const fetchReviews = () => async (dispatch) => {
  const response = await datos.get("/ReviewsDetalle");
  dispatch({ type: "FETCH_REVIEWS", payload: response.data });
};

export const fetchReview = (id) => async (dispatch) => {
  const response = await datos.get(`/ReviewsDetalle/${id}`);
  dispatch({ type: "FETCH_REVIEW", payload: response.data });
};

export const selectLugar = (lugar) => {
  return {
    type: "LUGAR_SELECTED",
    payload: lugar,
  };
};

export const fetchLugares = () => async (dispatch) => {
  const response = await datos.get("/lugares");
  dispatch({ type: "FETCH_LUGARES", payload: response.data });
};

export const fetchLugar = (id) => async (dispatch) => {
  const response = await datos.get(`/lugares/${id}`);
  dispatch({ type: "FETCH_LUGAR", payload: response.data });
};