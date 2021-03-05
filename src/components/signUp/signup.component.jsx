// @ts-nocheck

import React from 'react'
import '../signUp/signup.styles.scss'
import FormInput from '../formInput/formInput.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, addUserToDatabase } from '../../firebase/firebase.utils'


class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:'',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            window.alert("Password are not same")
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            console.log(user)
            await addUserToDatabase(user, {displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            console.error(error)
        }
    }

    handleChange = (event) => {
        const {name, value } = event.target
        this.setState({[name] : value})
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
            <h1 className="title">Sign Up</h1>
            <span>Sign Up with Email and Password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        label="Display Name"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name='password'
                        value={password}
                        label="Password"
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        label="Confirm Password"
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">
                        SIGN UP
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp