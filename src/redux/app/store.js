import { createStore, applyMiddleware } from "redux";
import rootReducer from "./../reducers/index";
import reduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
