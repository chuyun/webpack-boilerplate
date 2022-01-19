import { createModel } from '@rematch/core';

import { RootModel } from '.';

export type BaseModel = {
  count: number;
};

const initBaseState: BaseModel = {
  count: 0,
};

const demo = createModel<RootModel>()({
  state: initBaseState,
  reducers: {
    set(state: BaseModel, payload: Partial<BaseModel>) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: () => ({}),
});

export default demo;
