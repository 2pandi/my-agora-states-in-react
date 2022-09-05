import { ADD_DISCUSSION, FETCH_DISCUSSIONS_SUCCESS,FETCH_DISCUSSIONS_REQUEST, FETCH_DISCUSSIONS_ERROR } from "../actions/actions";

let initialState = {
  discussions: [],
  error: null
}

export const discussionReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_DISCUSSIONS_REQUEST:
      return {...state};
    case FETCH_DISCUSSIONS_SUCCESS:
      return {...state, discussions: action.payload.discussions};
    case FETCH_DISCUSSIONS_ERROR:
      return {...state, error: action.payload}
    case ADD_DISCUSSION:
      return {...state, discussions: [action.payload, ...state.discussions]}
    default:
      return state;
  }
};

export default discussionReducer;