import { all, fork, put, takeLatest, call, delay } from "redux-saga/effects";
import axios from "axios";

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducers/user";
//CHANGE_NICKNAME_FAILURE,
// CHANGE_NICKNAME_REQUEST,
// CHANGE_NICKNAME_SUCCESS,
// FOLLOW_FAILURE,
// FOLLOW_REQUEST,
// FOLLOW_SUCCESS,
// LOAD_FOLLOWERS_FAILURE,
// LOAD_FOLLOWERS_REQUEST,
// LOAD_FOLLOWERS_SUCCESS,
// LOAD_FOLLOWINGS_FAILURE,
// LOAD_FOLLOWINGS_REQUEST,
// LOAD_FOLLOWINGS_SUCCESS,
// LOAD_MY_INFO_REQUEST,
// LOAD_MY_INFO_SUCCESS,
// LOAD_USER_FAILURE,
// LOAD_USER_REQUEST,
// LOAD_USER_SUCCESS,

// REMOVE_FOLLOWER_FAILURE,
// REMOVE_FOLLOWER_REQUEST,
// REMOVE_FOLLOWER_SUCCESS,

// UNFOLLOW_FAILURE,
// UNFOLLOW_REQUEST,
// UNFOLLOW_SUCCESS,
// LOAD_MY_INFO_FAILURE,
// }

// function removeFollowerAPI(data) {
//   return axios.delete(`/user/follower/${data}`);
// }

// function* removeFollower(action) {
//   try {
//     const result = yield call(removeFollowerAPI, action.data);
//     yield put({
//       type: REMOVE_FOLLOWER_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: REMOVE_FOLLOWER_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function loadFollowersAPI(data) {
//   return axios.get("/user/followers", data);
// }

// function* loadFollowers(action) {
//   try {
//     const result = yield call(loadFollowersAPI, action.data);
//     yield put({
//       type: LOAD_FOLLOWERS_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: LOAD_FOLLOWERS_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function loadFollowingsAPI(data) {
//   return axios.get("/user/followings", data);
// }

// function* loadFollowings(action) {
//   try {
//     const result = yield call(loadFollowingsAPI, action.data);
//     yield put({
//       type: LOAD_FOLLOWINGS_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: LOAD_FOLLOWINGS_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function changeNicknameAPI(data) {
//   return axios.patch("/user/nickname", { nickname: data });
// }

// function* changeNickname(action) {
//   try {
//     const result = yield call(changeNicknameAPI, action.data);
//     yield put({
//       type: CHANGE_NICKNAME_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: CHANGE_NICKNAME_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function loadUserAPI(data) {
//   return axios.get(`/user/${data}`);
// }

// function* loadUser(action) {
//   try {
//     const result = yield call(loadUserAPI, action.data);
//     console.log("loadUserData", result.data);
//     yield put({
//       type: LOAD_USER_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: LOAD_USER_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function loadMyInfoAPI() {
//   return axios.get("/user");
// }

// function* loadMyInfo() {
//   try {
//     const result = yield call(loadMyInfoAPI);
//     yield put({
//       type: LOAD_MY_INFO_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: LOAD_MY_INFO_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

function logInAPI(data) {
  return axios.post("/user/login", data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data); // call 동기액션. 응답을 받을떄까지 기다렸다 값을 result에 넣어줌.
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/user/logout");
}

function* logOut() {
  try {
    // yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post("/user", data);
}

function* signUp(action) {
  try {
    // const result = yield call(signUpAPI, action.data);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

// function followAPI(data) {
//   return axios.patch(`/user/${data}/follow`);
// }

// function* follow(action) {
//   try {
//     const result = yield call(followAPI, action.data);
//     yield put({
//       type: FOLLOW_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: FOLLOW_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function unfollowAPI(data) {
//   return axios.delete(`/user/${data}/follow`);
// }

// function* unfollow(action) {
//   try {
//     const result = yield call(unfollowAPI, action.data);
//     yield put({
//       type: UNFOLLOW_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: UNFOLLOW_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

// function* watchRemoveFollower() {
//   yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
// }

// function* watchLoadFollowers() {
//   yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
// }

// function* watchLoadFollowings() {
//   yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
// }

// function* watchChangeNickname() {
//   yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
// }

// function* watchLoadUser() {
//   yield takeLatest(LOAD_USER_REQUEST, loadUser);
// }

// function* watchLoadMyInfo() {
//   yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
// }

// function* watchFollow() {
//   yield takeLatest(FOLLOW_REQUEST, follow);
// }

// function* watchUnfollow() {
//   yield takeLatest(UNFOLLOW_REQUEST, unfollow);
// }

// 비동기 액션들을 넣어 준다.
// fork 비동기 함수 실행.  call 동기 함수 실행
// all 모두.
// 여기에 적힌 함수는 모두 한꺼번에 실행 됨.
// 함수는 실행되나 take를 사용해서 이벤드를 기다림.
// take  뒤 인자의 첫번쨰 액션이 실행딜 때까지 기다린다. -> 이벤트 처럼 작동.
// 후에 LOG_IN_REQUEST 액션이 실행 되면 뒤의 함수를 호출.
export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    // fork(watchRemoveFollower),
    // fork(watchLoadFollowers),
    // fork(watchLoadFollowings),
    // fork(watchChangeNickname),
    // fork(watchLoadUser),
    // fork(watchLoadMyInfo),
    // fork(watchFollow),
    // fork(watchUnfollow),
  ]);
}
