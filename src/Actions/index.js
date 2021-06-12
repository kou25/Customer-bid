import {
  GET_CUSTOMER_FAILURE,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
} from "../Constants";
import { GET_API } from "../Middleware/symbols";

const BASE_URL = 'https://intense-tor-76305.herokuapp.com/merchants';

export function GetCustomers() {
  return {
    [GET_API]: {
      endpoint: BASE_URL,
      types: [GET_CUSTOMER_REQUEST, GET_CUSTOMER_SUCCESS, GET_CUSTOMER_FAILURE],
      authenticated: true,
    },
  };
}
