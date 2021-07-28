import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { coinReducer } from "./coins/reducer"

export const store = createStore(coinReducer, applyMiddleware(thunk))
