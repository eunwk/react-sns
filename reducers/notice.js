import produce from "immer";
import shortId from "shortid";
import { faker } from "@faker-js/faker";

export const initialState = {
  notices: [],
};

initialState.notices = initialState.notices.concat(
  Array(5)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      title: faker.lorem.sentence(5),
      creator: faker.name.fullName(),
      createAt: faker.date.recent().toLocaleString(),
      Images: [
        {
          src: faker.image.image(),
        },
      ],
    }))
);

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });

export default reducer;
