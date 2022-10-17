import produce from 'immer';

export const initialState = {
    loadMyInfoLoading: false,// 나의 정보 
    loadMyInfoDone: false,
    loadMyInfoError: null,
}


export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';



const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOG_IN_REQUEST:
                draft.loginLoading = true;
                draft.loginError = null;
                draft.loginDone = false;
                break;
            case LOG_IN_SUCCESS:
                draft.loginLoading = false;
                draft.loginDone = true;
                draft.me = action.data;
                break;
            case LOG_IN_FAILURE:
                draft.loginLoading = false;
                draft.loginError = action.error;
                break;
            default:
                break;
        }
    });
}
export default reducer;