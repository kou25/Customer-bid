import {
  GET_CUSTOMER_FAILURE,
    GET_CUSTOMER_PROFILE_FAILURE,
    GET_CUSTOMER_PROFILE_REQUEST,
    GET_CUSTOMER_PROFILE_SUCCESS,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
} from "../Constants";

const initialState = {
  getCustomerData: [],
  getCustomerLoading: false,
  getCustomerError: false,
  getCustomerProfileData: {},
  getCustomerProfileLoading: false,
  getCustomerProfileError: false,
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
    case GET_CUSTOMER_PROFILE_REQUEST:
      return Object.assign({}, state, {
        getCustomerProfileLoading: true,
        getCustomerProfileError: false,
      });
    case GET_CUSTOMER_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        getCustomerProfileLoading: false,
        getCustomerProfileError: false,
        getCustomerProfileData: action.response.data,
      });
    case GET_CUSTOMER_PROFILE_FAILURE:
      return Object.assign({}, state, {
        getCustomerProfileLoading: false,
        getCustomerProfileError: true,
        getCustomerProfileData: [],
      });

    default:
      return state;
  }
}
