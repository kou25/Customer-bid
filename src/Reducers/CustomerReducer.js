import {
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
} from "../Constants";

const initialState = {
  getCustomerData: [],
  getCustomerLoading: false,
  getCustomerError: false,
};

export default function CustomerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER_REQUEST:
      return Object.assign({}, state, {
        getCustomerLoading: true,
        getCustomerError: false,
      });
    case GET_CUSTOMER_SUCCESS:
      return Object.assign({}, state, {
        getCustomerLoading: false,
        getCustomerError: false,
        getCustomerData: action.response.data,
      });
    case GET_CUSTOMER_FAILURE:
      return Object.assign({}, state, {
        getCustomerLoading: false,
        getCustomerError: true,
        getCustomerData: [],
      });

    default:
      return state;
  }
}
