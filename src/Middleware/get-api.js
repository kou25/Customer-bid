import { GET_API } from './symbols';
import axios from 'axios'
function getApi(endpoint){

    return axios.get(endpoint)
        .then((response) => {
            if (response.status === 200) {
                return ({data: response.data, status: response.status}) 
            } else {
                return response.json().then(data =>
                    ({data, status: response.status})
                )
            }
        })
        .catch(err => ({data: {error: true, message: "Internal Server Error"}, status: 500}));
}

export default store => next => action => {
    const getApiDetails = action[GET_API]
    if (typeof getApiDetails === 'undefined') {
        return next(action);
    }
    let {endpoint, types, authenticated} = getApiDetails;
    const [requestType, successType, errorType] = types;
    return (
        next({type: requestType}),
        getApi(endpoint, authenticated).then(
        response => {
            if (response.status === 200) {
                return next({
                    response,
                    type: successType
                })
            } else {
                return next({
                    response,
                    type: errorType
                })
            }
        }
    ))
}