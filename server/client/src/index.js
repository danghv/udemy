import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

//the first param is the initial reducer
//the second param is the initial state
//the 3rd param is what middleware we use (can be thunk or saga or what ever)
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

// console.log('stripe key is ', process.env.REACT_APP_STRIPE_KEY)
// console.log('enviroment is ', process.env.NODE_ENV)