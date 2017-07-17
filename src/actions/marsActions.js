import * as types from '../constants/actionTypes';
const queryString = require('query-string');


function marsRequest() {
    return {
        type: types.MARS_REQUEST,
        isLoading: true,
        error: null
    };
}

function marsSuccess(json) {
    return{
        type: types.MARS_SUCCESS,
        data: json,
        isLoading: false,
        error: null
    };
}

function marsFailure(json) {
    return {
        type: types.MARS_FAILURE,
        isLoading: false,
        error: json
    };
}

export function getMars(urlRest, params) {
    const API_KEY = 'FtcSsTVSlaML1uiRBB5GW0ALQgZSHdW6GrYuNPo6';
    const parameters = {
      api_key: API_KEY,
      ...params,
    };
    const query = queryString.stringify(parameters);
    const url = `http://api.nasa.gov/${urlRest}?${query}`;

    return (dispatch) => {
        dispatch(marsRequest());
        fetch(url)
        .then((response) => {
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(marsSuccess(items)))
        .catch((error) => dispatch(marsFailure(error)));
    };
}
