import {combineReducers, configureStore} from "@reduxjs/toolkit";
import chatSlice from "./chat-slice";
import uiSlice from "./ui-slice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authSlice from "./auth-slice";
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  chat: chatSlice.reducer,
  ui: uiSlice.reducer,
  auth: authSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});


export default store;
export const persistor = persistStore(store)