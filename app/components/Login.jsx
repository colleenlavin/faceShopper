import React from 'react'
import {browserHistory} from 'react-router'

export const Login = ({ login }) => (
    <form onSubmit={evt => {
              evt.preventDefault()
              login(evt.target.username.value, evt.target.password.value)
              .then(() => browserHistory.push('/'))
            }}>
              <input name="username" placeholder='email'/>
              <input name="password" type="password" placeholder='password'/>
              <button type="submit">Login</button>
            </form>
)

import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

export default connect(
  state => ({}),
  { login },
)(Login)
