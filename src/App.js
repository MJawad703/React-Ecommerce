import React from 'react'
import '../src/App.css'
import HomePage from '../src/pages/homepage/homepage.component.jsx'
import Shop from '../src/pages/shop/shop.component.jsx'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={Shop} />
    </div>
  );
}

export default App;
