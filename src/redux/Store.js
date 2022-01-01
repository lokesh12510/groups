import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/Auth.reducer";
import { messageReducer } from "./reducers/Message.reducer";
import { loaderReducer } from "./reducers/Loader.reducer";
import { dashboardReducer, groupReducer } from "./reducers/Group.reducer";
import { userReducer } from "./reducers/User.reducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { paymentsReducer } from "./reducers/Payments.reducer";
import { membersReducer } from "./reducers/Members.reducer";
import { userPaymentReducer } from "./reducers/UserPayments.reducer";
import { groupPaymentHistoryReducer } from "./reducers/GroupPaymentHistory.reducer";
import { userContributions } from "./reducers/UserContribution.reducer";
import { transactionReducer } from "./reducers/Transaction.reducer";
import { EventReducer } from "./reducers/Blog.reducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [
    "members",
    "payment",
    "groupHistory",
    "userPayments",
    "userContribution",
    "transactions",
    "dashboard",
    "events"
  ],
};

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  loader: loaderReducer,
  groups: groupReducer,
  user: userReducer,
  payment: paymentsReducer,
  members: membersReducer,
  userPayments: userPaymentReducer,
  groupHistory: groupPaymentHistoryReducer,
  userContribution: userContributions,
  transactions: transactionReducer,
  dashboard: dashboardReducer,
  events:EventReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export let persistor = persistStore(store);
