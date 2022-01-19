import { init, RematchRootState, RematchDispatch } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import selectPlugin from '@rematch/select';
import updatedPlugin, { ExtraModelsFromUpdated } from '@rematch/updated';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { models, RootModel } from '../models';

type FullModel = ExtraModelsFromLoading<RootModel> &
  ExtraModelsFromUpdated<RootModel>;

const history = createBrowserHistory();

const rootReducer = () => ({
  router: connectRouter(history),
});

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  middlewares.push(require('redux-logger').createLogger());
}

const store = init<RootModel, FullModel>({
  models,
  redux: {
    reducers: rootReducer(),
    middlewares,
  },
  plugins: [loadingPlugin(), selectPlugin(), immerPlugin(), updatedPlugin()],
});

export default store;

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
