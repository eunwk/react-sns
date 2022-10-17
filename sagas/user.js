import { all, fork, takeLatest, put, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
    UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
    LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE,
    CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE,
    LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE,
    REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE,
} from '../reducers/user';

function removeFollowerAPI(data) {
    return axios.delete(`/user/follower/${data}`);  //DELETE /user/folloer/1
}

function* removeFollower(action) {
    try {
        const result = yield call(removeFollowerAPI, action.data);
        yield put({
            type: REMOVE_FOLLOWER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_FOLLOWER_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowersAPI(data) {
    return axios.get('/user/followers', data);
}

function* loadFollowers(action) {
    try {
        const result = yield call(loadFollowersAPI, action.data);
        yield put({
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWERS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowingsAPI(data) {
    return axios.get('/user/followings', data);
}

function* loadFollowings(action) {
    try {
        const result = yield call(loadFollowingsAPI, action.data);
        yield put({
            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWINGS_FAILURE,
            error: err.response.data,
        });
    }
}

// 닉네임 변경
function changeNicknameAPI(data) {
    return axios.patch('/user/nickname', { nickname: data });
}

function* changeNickname(action) {
    try {
        const result = yield call(changeNicknameAPI, action.data);
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data,
        });
    }
}



//logInAPI 함수는 제너레이트 함수 아님 주의.
function loadMyInfoAPI() {
    //서버에 요청. data 전달
    return axios.get('/user');
    // get과 delete는 데이터 전달하는게 없다.
}


function* loadMyInfo() {
    try {
        const result = yield call(loadMyInfoAPI);
        // yield delay(1000);
        yield put({
            type: LOAD_MY_INFO_SUCCESS,
            data: result.data,  // 서버로부터 사용자 정보를 받아온다.
            // data: action.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_MY_INFO_FAILURE,
            error: err.response.data,
        });
    }
}


//logInAPI 함수는 제너레이트 함수 아님 주의.
function loadUserAPI(data) {
    //서버에 요청. data 전달
    return axios.get(`/user/${data}`);
    // get과 delete는 데이터 전달하는게 없다.
}


function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        // yield delay(1000);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data  // 서버로부터 사용자 정보를 받아온다.
            // data: action.data
        });
    } catch (err) {
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data,
        })
    }
}




//logInAPI 함수는 제너레이트 함수 아님 주의.
function logInAPI(data) {
    //서버에 요청. data 전달
    return axios.post('/user/login', data)
}


function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        // yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data  // 서버로부터 사용자 정보를 받아온다.
            // data: action.data
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function logOutAPI() {
    return axios.post('/user/logout');
}



function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield call(logOutAPI);
        // yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        })
    }
}

function signUpAPI(data) {
    return axios.post('/user', data)  //data : email. password, nickname
    // get, delete는 두번째 인자로 데이터를 넘길 수 없음.
    // post, put, patch 는 데이터를 넘길 수 있다.
}


function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        // yield delay(1000)
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}


function followAPI(data) {
    return axios.patch(`/user/${data}/follow`)
}


function* follow(action) {
    try {
        const result = yield call(followAPI, action.data);
        //yield delay(1000)
        yield put({
            type: FOLLOW_SUCCESS,
            data: result.data, //User.id
        });
    } catch (err) {
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}

function unfollowAPI(data) {
    return axios.delete(`/user/${data}/follow`)
}


function* unfollow(action) {
    try {
        const result = yield call(unfollowAPI, action.data);
        // yield delay(1000)
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: result.data, //User.id
        });
    } catch (err) {
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}

function* watchRemoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}


function* watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}


function* watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}


function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}


function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnFollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

// 인자를 넘기지 않아도 action으로 data를 받는다.
function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
    yield all([

        fork(watchLogIn),
        fork(watchLogOut),

    ])
}