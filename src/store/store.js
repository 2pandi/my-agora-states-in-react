import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { discussionReducer } from '../reducers/discussionReducer'
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

export const store = createStore(discussionReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

/**
 * 우리는 리덕스 개발자도구와 미들웨어를 사용하기 위해서 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 를 사용합니다. (크롬 확장 프로그램에 작성되어있는 자바스크립트 함수입니다.) 만약에 리덕스 개발자도구가 설치되어있지 않다면 일반 compose 를 사용합니다.
 */