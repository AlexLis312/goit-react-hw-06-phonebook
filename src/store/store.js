import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebookSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['phonebook'],
  blacklist: ['phonebook.filter'],
};

const rootRedicer = combineReducers({
  phonebook: phonebookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootRedicer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
