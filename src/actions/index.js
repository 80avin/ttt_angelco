import axios from 'axios';

export const changeN = n => {
    return {
        type: 'CHANGE_N',
        payload: n>=0?n:0
    }
}

export const getWords = (n=0) => {
    n = n<0?0:n
    return function (dispatch, getState) {
        // console.log({n});
        return axios.get('/api/topn', {
            params: {
                n: n
            }
        }).then(res => dispatch({
                type: 'GET_WORDS',
                payload: res.data.words
        }));
    }
}