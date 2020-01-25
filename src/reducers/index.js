import { combineReducers } from 'redux';

const getWordsReducer = (words = [], action)=>{
    if(action.type === 'GET_WORDS'){
        return action.payload;
    }
    // FIXME toggle comment on the test cases
    // return [{"name":"I","count":27},{"name":"a","count":25},{"name":"to","count":22},{"name":"com","count":19},{"name":"you","count":15},{"name":"the","count":15}];
    return words;
}

const getNReducer = (n=0, action)=>{
    if(action.type==='CHANGE_N'){
        return action.payload
    }
    return n;
}

export default combineReducers({
    words: getWordsReducer,
    n: getNReducer
});