import React from 'react';
import '../SignIn-SignUp/SignIn-SignUp.style.scss'
import SignIn from '../../components/SignIn/SignIn.component'
import SignUp  from '../../components/signUp/signup.component'

const SignInSignUp = () => (
    <div className="SignInSignUp">
        <SignIn />
        <SignUp />
    </div>
)


export default SignInSignUp