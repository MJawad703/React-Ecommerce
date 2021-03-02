import React from 'react'
import '../header/header.style.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ authStatus }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo />
        </Link>
        
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT US</Link>
            {
                authStatus ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className="option" to='/signin'>SIGN UP</Link>
            }
        </div>
    </div>
)

export default Header