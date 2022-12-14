import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import pricesReducer from './prices/prices.reducer';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    prices: pricesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
