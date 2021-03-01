import React from 'react'
import '../src/App.css'
import HomePage from '../src/pages/homepage/homepage.component.jsx'
import Shop from '../src/pages/shop/shop.component.jsx'
import Header from '../src/components/header/header.component.jsx'
import SignInSignUp from '../src/pages/SignIn-SignUp/SignIn-SignUp.component.jsx'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
