import React from 'react'
import { LoginForm, RegisterForm } from 'modules';
import { Switch, Route } from 'react-router-dom';
import './Auth.scss';


const Auth = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={['/', '/login']} component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </div>
  )
}

export default Auth
