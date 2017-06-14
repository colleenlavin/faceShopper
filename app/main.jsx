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
import axios from 'axios'

import CartContainer from './containers/CartContainer'
import FaceContainer from './containers/FaceContainer'
import FacesContainer from './containers/FacesContainer'
import CheckoutContainer from './containers/CheckoutContainer'
import NewFaceContainer from './containers/NewFaceContainer'

import {getFaces} from './reducers/faces'
import {getFace} from './reducers/faces'
import {getSession} from './reducers/guestSess'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
     <Navbar /> {/*handleClick={handleCartClick*/}
      {children}
    </div>
)

// const handleCartClick = () => {
//   onCartEnter()
// }

const onAppEnter = () => {
  store.dispatch(getFaces())
}

const onFaceEnter = function (nextRouterState) {
  const faceId = nextRouterState.params.faceId;
  store.dispatch(getFace(faceId))
}

// const onCartEnter = function (nextRouterState) {
//   const cartId = nextRouterState.params.cartId
//   store.dispatch(getCart(cartId))
// }

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={FacesContainer} onEnter={onAppEnter} />
        <Route path="/faces" component={FacesContainer} onEnter={onAppEnter} />
        <Route path="/faces/:faceId" component={FaceContainer} onEnter={onFaceEnter}/>
        <Route path="/cart" component={CartContainer} />
        <Route path="/checkout" component={CheckoutContainer}/>
        <Route path="/login" component={LoginPage} onEnter={onAppEnter} />
        <Route path="/new-face" component={NewFaceContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
