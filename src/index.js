import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    
  </Provider>,
  document.getElementById('root')
)
