// @ts-nocheck
import React, { Component } from 'react'
import FormInput from '../formInput/formInput.component'
import CustomButton from '../custom-button/custom-button.component'
import '../SignIn/SignIn.style.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }
    handleChange = (event) => {

        const { name, value } = event.target
        this.setState({ [name]: value })
        console.log([name])
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                        label="Email"
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="button-container">
                        <CustomButton type="submit">Submit</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogle>
                            {' '}
                        Sign In with google {' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn

