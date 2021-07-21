import _ from "lodash";
import {
  FETCH_LUGAR,
  FETCH_LUGARES,  
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LUGAR:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_LUGARES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
