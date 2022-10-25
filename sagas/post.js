import axios from "axios";
import {
  all,
  fork,
  put,
  takeLatest,
  throttle,
  call,
  delay,
} from "redux-saga/effects";

import {
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  generateDummyPost,
} from "../reducers/post";

// LIKE_POST_FAILURE,
// LIKE_POST_REQUEST,
// LIKE_POST_SUCCESS,
// LOAD_HASHTAG_POSTS_FAILURE,
// LOAD_HASHTAG_POSTS_REQUEST,
// LOAD_HASHTAG_POSTS_SUCCESS,
// LOAD_POST_FAILURE,
// LOAD_POST_REQUEST,
// LOAD_POST_SUCCESS,
// LOAD_POSTS_FAILURE,

// LOAD_USER_POSTS_REQUEST,
// LOAD_USER_POSTS_SUCCESS,

// RETWEET_FAILURE,
// RETWEET_REQUEST,
// RETWEET_SUCCESS,
// UNLIKE_POST_FAILURE,
// UNLIKE_POST_REQUEST,
// UNLIKE_POST_SUCCESS,

// UPLOAD_IMAGES_FAILURE,
// UPLOAD_IMAGES_REQUEST,
// UPLOAD_IMAGES_SUCCESS,
//
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

function loadPostsAPI(lastId) {
  return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    //  const result = yield call(loadPostsAPI, action.lastId);
    yield delay(1000);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      // data: action.data,
      data: generateDummyPost(10),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post("/post", data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: action.data.id,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    //  const result = yield call(removePostAPI, action.data);
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function updatePostAPI(data) {
  return axios.patch(`/post/${data.PostId}`, data);
}

function* updatePost(action) {
  try {
    // const result = yield call(updatePostAPI, action.data);
    yield delay(1000);
    yield put({
      type: UPDATE_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

// function retweetAPI(data) {
//   return axios.post(`/post/${data}/retweet`);
// }

// function* retweet(action) {
//   try {
//     const result = yield call(retweetAPI, action.data);
//     yield put({
//       type: RETWEET_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: RETWEET_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function uploadImagesAPI(data) {
//   return axios.post('/post/images', data);
// }

// function* uploadImages(action) {
//   try {
//     const result = yield call(uploadImagesAPI, action.data);
//     yield put({
//       type: UPLOAD_IMAGES_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: UPLOAD_IMAGES_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function likePostAPI(data) {
//   return axios.patch(`/post/${data}/like`);
// }

// function* likePost(action) {
//   try {
//     const result = yield call(likePostAPI, action.data);
//     yield put({
//       type: LIKE_POST_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: LIKE_POST_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function unlikePostAPI(data) {
//   return axios.delete(`/post/${data}/like`);
// }

// function* unlikePost(action) {
//   try {
//     const result = yield call(unlikePostAPI, action.data);
//     yield put({
//       type: UNLIKE_POST_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: UNLIKE_POST_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function loadPostAPI(data) {
//   return axios.get(`/post/${data}`);
// }

// function* loadPost(action) {
//   try {
//     const result = yield call(loadPostAPI, action.data);
//     yield put({
//       type: LOAD_POST_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: LOAD_POST_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function loadHashtagPostsAPI(data, lastId) {
//   return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
// }

// function* loadHashtagPosts(action) {
//   try {
//     console.log('loadHashtag console');
//     const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
//     yield put({
//       type: LOAD_HASHTAG_POSTS_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: LOAD_HASHTAG_POSTS_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

// function loadUserPostsAPI(data, lastId) {
//   return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`);
// }

// function* loadUserPosts(action) {
//   try {
//     const result = yield call(loadUserPostsAPI, action.data, action.lastId);
//     yield put({
//       type: LOAD_USER_POSTS_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     console.error(err);
//     yield put({
//       type: LOAD_USER_POSTS_FAILURE,
//       error: err.response.data,
//     });
//   }
// }

function* watchLoadPosts() {
  yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

// function* watchRetweet() {
//   yield takeLatest(RETWEET_REQUEST, retweet);
// }

// function* watchUploadImages() {
//   yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
// }

// function* watchLikePost() {
//   yield takeLatest(LIKE_POST_REQUEST, likePost);
// }

// function* watchUnlikePost() {
//   yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
// }

// function* watchLoadPost() {
//   yield takeLatest(LOAD_POST_REQUEST, loadPost);
// }

// function* watchLoadHashtagPosts() {
//   yield throttle(5000, LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
// }

// function* watchLoadUserPosts() {
//   yield throttle(5000, LOAD_USER_POSTS_REQUEST, loadUserPosts);
// }

// 비동기 액션들을 넣어 준다.
// fork 비동기 함수 실행.  call 동기 함수 실행
// all 모두.
// 여기에 적힌 함수는 모두 한꺼번에 실행 됨.
// 함수는 실행되나 take를 사용해서 이벤드를 기다림.
// take  뒤 인자의 첫번쨰 액션이 실행딜 때까지 기다린다. -> 이벤트 처럼 작동.
// 후에 LOG_IN_REQUEST 액션이 실행 되면 뒤의 함수를 호출.
export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchUpdatePost),
    fork(watchAddComment),
    // fork(watchRetweet),
    // fork(watchUploadImages),
    // fork(watchLikePost),
    // fork(watchUnlikePost),

    // fork(watchLoadPost),
    // fork(watchLoadUserPosts),
    // fork(watchLoadHashtagPosts),
  ]);
}
