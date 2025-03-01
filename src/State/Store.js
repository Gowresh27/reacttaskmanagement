import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from"./AuthSlice";
import taskReducer from"./TaskSlice";
import submissionReducer from"./SubmissionSlice";

const rootReducer = combineReducers({
    

     task: taskReducer,
     auth: authReducer,
    submission:submissionReducer
    // Add other reducers here if needed
  });
  
  
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
  
  export default store;