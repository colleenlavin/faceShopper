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
import NoAdminFacesContainer from './containers/NoAdminFacesContainer'
import CheckoutContainer from './containers/CheckoutContainer'
import NewFaceContainer from './containers/NewFaceContainer'
import {getFaces} from './reducers/faces'
import {getFace} from './reducers/faces'
const FaceApp = connect(
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
      <Route path="/" component={FaceApp} onEnter={onAppEnter}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={NoAdminFacesContainer}/>
        <Route path="/faces" component={NoAdminFacesContainer}/>
        <Route path="/admin-faces" component={FacesContainer}/>
        <Route path="/noadminfaces" component={NoAdminFacesContainer}/>

        <IndexRedirect to="/faces" />
        <Route path="/faces" component={FacesContainer}/>

        <Route path="/faces/:faceId" component={FaceContainer} onEnter={onFaceEnter}/>
        <Route path="/cart" component={CartContainer}/>
        <Route path="/checkout" component={CheckoutContainer}/>
         <Route path="/confirm" component={Confirmation}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/new-face" component={NewFaceContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
