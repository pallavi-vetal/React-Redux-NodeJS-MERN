import { SHOW_RESTO, SEARCH_RESTO } from "../_constants/restoConstants";

const initialState = {
  resto:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_RESTO:
      return {
        resto: action.payload
      };
      case SEARCH_RESTO:
      return {
        resto: action.payload
      };
    default:
      return state;
  }
}
