export const ADD_DISCUSSION = 'ADD_DISCUSSION';
export const FETCH_DISCUSSIONS_REQUEST = 'FETCH_DISCUSSIONS_REQUEST';
export const FETCH_DISCUSSIONS_ERROR = 'FETCH_DISCUSSIONS_ERROR';
export const FETCH_DISCUSSIONS_SUCCESS = 'FETCH_DISCUSSIONS_SUCCESS';

export const addDiscussion = (author, title, createdAt) => {
    let avatarUrl = 'https://p.kindpng.com/picc/s/33-338711_circle-user-icon-blue-hd-png-download.png';
    return {
        type: ADD_DISCUSSION,
        payload: {
            author,
            title,
            createdAt,
            avatarUrl,
        }
    }
}

export const fetchDiscussionsRequest = () => {
  return {
    type: FETCH_DISCUSSIONS_REQUEST
  }
}

export const fetchDiscussionsError = (error) => {
  return {
    type: FETCH_DISCUSSIONS_ERROR,
    payload: error
  }
}

export const fetchDiscussionsSuccess = discussions => ({
  type: FETCH_DISCUSSIONS_SUCCESS,
  payload: {discussions}
})
