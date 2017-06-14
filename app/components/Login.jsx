import React from 'react'
import {browserHistory} from 'react-router'

export const Login = ({ login, user }) => (
    <form onSubmit={evt => {
              evt.preventDefault()
              login(evt.target.username.value, evt.target.password.value)
              .then(
                ()=> {
                  console.log('~~~~~~~~~~~~', user);
                  if (user.isAdmin){
                    browserHistory.push('/admin-faces')
                  } else {
                    browserHistory.push('/home')
                  }
                }
              )
            }}>
              <input name="username" placeholder='email'/>
              <input name="password" type="password" placeholder='password'/>
              <button type="submit">Login</button>
            </form>
)

import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export default connect(
  state => ({user: state.auth}),
  { login },
)(Login)
