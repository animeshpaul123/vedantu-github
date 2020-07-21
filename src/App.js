import React from 'react'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store'
import Page from './components/page'
import './components/all.css'

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  )
}

export default App;