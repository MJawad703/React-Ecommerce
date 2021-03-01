import React, { Component } from 'react'
import FormInput from '../formInput/formInput.component'
import CustomButton from '../custom-button/custom-button.component'
import '../SignIn/SignIn.style.scss'

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
    }

    render() {
        console.log(this.state)
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
                    <CustomButton onClick={this.handleSubmit} type="submit">Submit</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn

