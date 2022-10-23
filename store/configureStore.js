//넥스트에 리덕스를 붙이기 위해 next-redux-wrapper를 사용
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import rootSaga from "../sagas";

// 액션이 dispatch 될때 action 정보를 출력해 주는 미들 웨어
const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log(action);
    return next(action);
  };

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  // 배포용일 때, 히스토리를 스텍에 쌓지 않도록(보안상) 처리
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) // 배포용일떄
      : composeWithDevTools(applyMiddleware(...middlewares)); // 개발모드일때

  const store = createStore(reducer, enhancer);
  // console.log("configureStore rootSaga")
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

// wrapper로 _app.js를 감싸준다.
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
