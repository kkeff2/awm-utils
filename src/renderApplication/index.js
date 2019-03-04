import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'
import reducers from '../reducers'

const configureStore = function (middleware, initialState) {
  const enhancer = compose(applyMiddleware(...middleware))
  return createStore(
    reducers,
    initialState,
    enhancer
  )
}

export const renderApplication = ({children, rootElement /*, isDevelop*/}) => {
  ReactDOM.render(
    <Provider store={configureStore(middleware)}>
      {children}
    </Provider>,
    rootElement
  )
}
