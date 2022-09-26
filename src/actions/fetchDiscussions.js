import axios from 'axios';
import { fetchDiscussionsRequest, fetchDiscussionsSuccess, fetchDiscussionsError } from './actions';

export const fetchDiscussions = () => {
    return dispatch => {
        dispatch(fetchDiscussionsRequest());
        axios.get('http://localhost:4001/discussions/')
        .then(res => {
            dispatch(fetchDiscussionsSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchDiscussionsError(error));
        });
    };
}
