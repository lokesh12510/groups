import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/Auth.reducer";
import { messageReducer } from "./reducers/Message.reducer";
import { loaderReducer } from "./reducers/Loader.reducer";
import { groupReducer } from "./reducers/Group.reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./reducers/User.reducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  loader: loaderReducer,
  groups: groupReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export let persistor = persistStore(store);