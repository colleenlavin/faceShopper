'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Home from './components/Home'
import Login from './components/Login'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Confirmation from './components/Confirmation'
import axios from 'axios'

import CartContainer from './containers/CartContainer'
import FaceContainer from './containers/FaceContainer'
import FacesContainer from './containers/FacesContainer'
import CheckoutContainer from './containers/CheckoutContainer'

import {getFaces} from './reducers/faces'
import {getFace} from './reducers/faces'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
     <Navbar />
      {children}
    </div>
)

const onAppEnter = () => {
  store.dispatch(getFaces())
}

const onFaceEnter = function (nextRouterState) {
  const faceId = nextRouterState.params.faceId;
  store.dispatch(getFace(faceId))
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={FacesContainer} onEnter={onAppEnter} />
        <Route path="/faces" component={FacesContainer} onEnter={onAppEnter} />
        <Route path="/faces/:faceId" component={FaceContainer} onEnter={onFaceEnter}/>
        <Route path="/cart" component={CartContainer} onEnter={onAppEnter} />
        <Route path="/checkout" component={Checkout}/>
         <Route path="/confirm" component={Confirmation}/>
        <Route path="/login" component={LoginPage} onEnter={onAppEnter} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
