import { Models } from '@rematch/core';
import demo from './demo';

export interface RootModel extends Models<RootModel> {
  demo: typeof demo;
}

export const models: RootModel = {
  demo,
};
