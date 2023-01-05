import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./Reducer/Index";


const composedEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const store = createStore(rootreducer,composedEnhancers(applyMiddleware(thunk)));

export default store;