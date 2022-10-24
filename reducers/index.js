import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";
import notice from "./notice";

// store.dispatch(changeName('eunwk'));

// 리듀서 : 이전상태, 액션을 통해 다음상태를 만들어내는 함수
// function rootReducer(state = initialState, action) {
//     switch (action.type) {
//         case HYDRATE:
//             console.log('HYDRATE', HYDRATE);
//             //HYDRATE는 action
//             return { ...state, ...action.payload }
//         // case 'LOG_IN':
//         //     return {
//         //         ...state,
//         //         user: {
//         //             ...state.user,
//         //             isLoggedIn: true,
//         //             user: action.data,
//         //         }
//         //     }
//         default:
//             return state;
//     }
// };

const rootReducer = combineReducers({
  // index 리듀서는 HYDRATE를 사용하기 위해 추가한 것임.
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", HYDRATE);
        //HYDRATE는 action
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
  notice,
});

export default rootReducer;
