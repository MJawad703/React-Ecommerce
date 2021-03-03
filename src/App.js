import React from 'react'
import '../src/App.css'
import HomePage from '../src/pages/homepage/homepage.component.jsx'
import Shop from '../src/pages/shop/shop.component.jsx'
import Header from '../src/components/header/header.component.jsx'
import SignInSignUp from '../src/pages/SignIn-SignUp/SignIn-SignUp.component.jsx'
import { Route, Switch } from 'react-router-dom'
import { auth, addUserToDatabase } from '../src/firebase/firebase.utils'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }


  unSubscribeFromAuth = null

  componentDidMount() {
    // code to store firebase returned data in our local state
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      // this.setState({ currentUser: user })
      if (authUser) {
        const userRef = await addUserToDatabase(authUser)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state.currentUser))
        })
      } else {
        this.setState({ currentUser: null })
      }
      // console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header authStatus={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
