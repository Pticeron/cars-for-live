import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import { carsApi } from './usersSlice';
import { favoriteSlice } from './favoriteSlice';

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorite'],
  };
  
  const rootReducer = combineReducers({
      [carsApi.reducerPath]: carsApi.reducer,
      favorite: favoriteSlice.reducer,
  });

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistUsersReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(carsApi.middleware),
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);
