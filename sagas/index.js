//all, fork, take, put, delay, debounce, throttle, takeLatest, takeMaybe, takeLeading 등 saga effect 라고 부름
import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
